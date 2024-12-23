<?php

require 'vendor/autoload.php';

header("Content-Type: application/json; charset=UTF-8");
mb_internal_encoding("UTF-8");

function verifyRecaptchaEnterpriseToken($token) {
    $apiKey = 'AIzaSyCR1dCucbuw3xcVvxg94U_YoFuf4sBDEx4'; // Google reCAPTCHA API Key
    $projectId = 's-m-current-reca-1734961162222'; // Google Cloud Project ID
    $url = "https://recaptchaenterprise.googleapis.com/v1/projects/{$projectId}/assessments?key={$apiKey}";

    $data = [
        "event" => [
            "token" => $token,
            "expectedAction" => "LOGIN", // Frontend'deki "action" değeri ile aynı olmalı
            "siteKey" => "6Lduy6MqAAAAACGAIFuC4p5RmL8z1C166sydvTup" // Google reCAPTCHA Site Key
        ]
    ];

    $options = [
        "http" => [
            "header" => "Content-Type: application/json\r\n",
            "method" => "POST",
            "content" => json_encode($data),
            "timeout" => 30 // Zaman aşımı (istek başarısızsa hata alır)
        ]
    ];

    $context = stream_context_create($options);

    try {
        $response = file_get_contents($url, false, $context);
        if ($response === false) {
            throw new Exception("reCAPTCHA doğrulama isteği başarısız.");
        }

        $result = json_decode($response, true);

        // API cevabını logla
        error_log("reCAPTCHA API cevabı: " . print_r($result, true));

        return $result['tokenProperties']['valid'] ?? false;
    } catch (Exception $e) {
        error_log("reCAPTCHA doğrulama hatası: " . $e->getMessage());
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Gelen JSON verisini çözümle
    $data = json_decode(file_get_contents('php://input'), true);

    // reCAPTCHA Token kontrolü
    $recaptchaToken = $data['recaptchaToken'] ?? null;
    if (!$recaptchaToken || !verifyRecaptchaEnterpriseToken($recaptchaToken)) {
        http_response_code(400);
        echo json_encode([
            "message" => "reCAPTCHA doğrulaması başarısız.",
            "status" => 400,
            "verification" => false
        ]);
        exit();
    }

    // Gerekli alanların kontrolü
    if (!isset($data['firstname'], $data['lastname'], $data['email'], $data['message'])) {
        http_response_code(400);
        echo json_encode([
            "message" => "Eksik parametreler.",
            "status" => 400,
            "verification" => false
        ]);
        exit();
    }

    // Form verilerini düzenle
    $formattedData = [
        'firstname' => trim($data['firstname']) ?: 'Keine Angabe',
        'lastname' => trim($data['lastname']) ?: 'Keine Angabe',
        'email' => trim($data['email']) ?: 'Keine Angabe',
        'phonenumber' => trim($data['phonenumber'] ?? 'Keine Angabe'),
        'companyname' => trim($data['companyname'] ?? 'Kein Firmenname'),
        'street' => trim($data['street'] ?? 'Keine Angabe'),
        'zipcode' => trim($data['zipcode'] ?? 'Keine Angabe'),
        'location' => trim($data['location'] ?? 'Keine Angabe'),
        'message' => trim($data['message']) ?: 'Keine Angabe',
        'pn' => trim($data['pn'] ?? 'Keine Angabe')
    ];

    $subject = "Anfrage - Website - {$formattedData['companyname']} - {$formattedData['lastname']} - " . date('d.m.Y');

    // Mail gönderimi için PHPMailer kullanımı
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.ionos.de';
    $mail->Port = 465;
    $mail->SMTPAuth = true;
    $mail->Username = 'form@superagentur-marketing.de';
    $mail->Password = 'txj1meu5FEZ_mfr7xkr';
    $mail->SMTPSecure = 'ssl';
    $mail->CharSet = 'UTF-8';

    $mail->setFrom('kontakt@superagentur-marketing.de');
    $mail->addAddress('kontakt@superagentur-marketing.de');
    $mail->Subject = $subject;
    $mail->Body = $mailTemplate; // Mail şablonunu olduğu gibi kullandım
    $mail->isHTML(true);

    if ($mail->send()) {
        http_response_code(200);
        echo json_encode([
            "message" => "Mail gönderildi.",
            "status" => 200,
            "verification" => true
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "message" => "Mail gönderilemedi: " . $mail->ErrorInfo,
            "status" => 500,
            "verification" => false
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        "message" => "Geçersiz istek metodu.",
        "status" => 405,
        "verification" => false
    ]);
}
