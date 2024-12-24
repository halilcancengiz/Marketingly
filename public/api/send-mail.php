<?php

require 'vendor/autoload.php';

header("Content-Type: application/json; charset=UTF-8");

$allowedOrigins = [
    'http://localhost:5173',
    'https://superagentur-marketing.de'
];

// Gelen isteğin Origin başlığını kontrol et ve izin verilenler arasında olup olmadığını doğrula
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

mb_internal_encoding("UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

function verifyRecaptchaEnterpriseToken($token) {
    $apiKey = 'AIzaSyCxdtjXlWHYnXKOj7V_hXXd7UWlaOUalks';
    $url = "https://recaptchaenterprise.googleapis.com/v1/projects/s-m-current-reca-1734961162222/assessments?key={$apiKey}";

    $data = [
        "event" => [
            "token" => $token,
            "expectedAction" => "SUBMIT",
            "siteKey" => "6Lduy6MqAAAAACGAIFuC4p5RmL8z1C166sydvTup"
        ]
    ];

    $options = [
        "http" => [
            "header" => "Content-Type: application/json\r\n",
            "method" => "POST",
            "content" => json_encode($data),
            "timeout" => 30
        ]
    ];

    $context = stream_context_create($options);

    try {
        $response = file_get_contents($url, false, $context);
        if ($response === false) {
            throw new Exception("reCAPTCHA doğrulama isteği başarısız.");
        }

        $result = json_decode($response, true);

        error_log("reCAPTCHA API cevabı: " . print_r($result, true));

        return $result['tokenProperties']['valid'] ?? false;
    } catch (Exception $e) {
        error_log("reCAPTCHA doğrulama hatası: " . $e->getMessage());
        return false;
    }
}

$formattedData = []; // Tüm durumlarda kullanılabilir olmasını sağlamak için tanımlandı.

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $recaptchaToken = $data['recaptchaToken'] ?? null;
    if (!$recaptchaToken || !verifyRecaptchaEnterpriseToken($recaptchaToken)) {
        http_response_code(400);
        echo json_encode([
            "message" => "reCAPTCHA doğrulaması başarısız.",
            "status" => 400,
            "verification" => false,
            "formattedData" => $formattedData,
            "token" => $recaptchaToken
        ]);
        exit();
    }

    if (!isset($data['firstname'], $data['lastname'], $data['email'], $data['message'])) {
        http_response_code(400);
        echo json_encode([
            "message" => "Eksik parametreler.",
            "status" => 400,
            "verification" => false,
            "formattedData" => $formattedData,
            "token" => $recaptchaToken
        ]);
        exit();
    }

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

    $mailTemplate = "
    <div style=\"color: #000000; line-height: 1.6;\">
      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Vorname:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['firstname']}</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Nachname:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['lastname']}</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">E-Mail:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\"><a href=\"mailto:{$formattedData['email']}\" style=\"color: #000000; text-decoration: none;\">{$formattedData['email']}</a></p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Telefonnummer:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['phonenumber']}</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Firma:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['companyname']}</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Straße, Nr.:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['street']}</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">PLZ:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['zipcode']}</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Ort:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['location']}</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Nachricht:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">{$formattedData['message']}</p>

      <hr style=\"border: 1px solid #000000; margin: 20px 0;\" />

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Date:</p>
      <p style=\"margin: 0 0 10px 0; color: #000000; font-size:16px;\">" . date('d.m.Y') . "</p>

      <p style=\"font-weight: 700; margin: 0; color: #000000; font-size:16px;\">Contact Source:</p>
      <p style=\"margin: 0; color: #000000; font-size:16px;\">{$formattedData['pn']}</p>
    </div>
  ";


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
    $mail->Body = $mailTemplate;
    $mail->isHTML(true);

    if ($mail->send()) {
        http_response_code(200);
        echo json_encode([
            "message" => "Mail gönderildi.",
            "status" => 200,
            "verification" => true,
            "formattedData" => $formattedData
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "message" => "Mail gönderilemedi: " . $mail->ErrorInfo,
            "status" => 500,
            "verification" => false,
            "formattedData" => $formattedData,
            "token" => $recaptchaToken
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


   