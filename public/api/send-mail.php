<?php

require 'vendor/autoload.php';

header("Content-Type: text/html; charset=UTF-8");
mb_internal_encoding("UTF-8");

function verifyRecaptchaToken($token) {
    $secretKey = '6LfJapcqAAAAAEQDPMs5TdJKPSXRix6nOBFEtgPm'; // Google reCAPTCHA Secret Key
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$token}");
    $result = json_decode($response, true);

    return $result['success'] ?? false;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // POST isteği: Mail gönder
    $data = json_decode(file_get_contents('php://input'), true);

    // Token kontrolü
    $recaptchaToken = $data['recaptchaToken'] ?? null;
    if (!$recaptchaToken || !verifyRecaptchaToken($recaptchaToken)) {
        echo json_encode([
            "message" => "reCAPTCHA doğrulaması başarısız.",
            "status" => 400,
            "verification" => false
        ]);
        exit();
    }

    if (isset($data['firstname']) && isset($data['lastname']) && isset($data['email']) && isset($data['message'])) {
        // Mail için formatlanan veriler
        $formattedData = [
            'firstname' => trim($data['firstname']) ?? 'Keine Angabe',
            'lastname' => trim($data['lastname']) ?? 'Keine Angabe',
            'email' => trim($data['email']) ?? 'Keine Angabe',
            'phonenumber' => trim($data['phonenumber'] ?? 'Keine Angabe'),
            'companyname' => trim($data['companyname'] ?? 'Kein Firmenname'),
            'street' => trim($data['street'] ?? 'Keine Angabe'),
            'zipcode' => trim($data['zipcode'] ?? 'Keine Angabe'),
            'location' => trim($data['location'] ?? 'Keine Angabe'),
            'message' => trim($data['message']) ?? 'Keine Angabe',
            'pn' => trim($data['pn'] ?? 'Keine Angabe')
        ];

        $subject = "Anfrage - Website - {$formattedData['companyname']} - {$formattedData['lastname']} - " . date('d.m.Y');

        // Mail içeriği HTML formatında oluşturuluyor
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

        // PHPMailer ile mail gönderimi
        $mail = new PHPMailer\PHPMailer\PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.ionos.de';
        $mail->Port = 465;
        $mail->SMTPAuth = true;
        $mail->Username = 'form@superagentur-marketing.de';
        $mail->Password = 'txj1meu5FEZ_mfr7xkr';
        $mail->SMTPSecure = 'ssl'; 
        $mail->CharSet = 'UTF-8'; // Karakter seti UTF-8 olarak ayarlandı

        $mail->setFrom('kontakt@superagentur-marketing.de');
        $mail->addAddress('kontakt@superagentur-marketing.de');
        $mail->Subject = $subject;
        $mail->Body = $mailTemplate;
        $mail->isHTML(true);

        if ($mail->send()) {
            echo json_encode([
                "message" => "Mail gönderildi",
                "status" => 200,
                "verification" => true,
                "token" => $recaptchaToken
            ]);
        } else {
            echo json_encode([
                "message" => "Mail gönderilemedi: " . $mail->ErrorInfo,
                "status" => 500,
                "verification" => false
            ]);
        }
    } else {
        echo json_encode([
            "message" => "Eksik parametreler",
            "status" => 400,
            "verification" => false
        ]);
    }
} else {
    echo json_encode([
        "message" => "Geçersiz istek metodu",
        "status" => 405,
        "verification" => false
    ]);
}
