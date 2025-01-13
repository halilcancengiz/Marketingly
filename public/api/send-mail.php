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

// Enhanced error logging function
function logError($message, $data = null, $type = 'ERROR') {
    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'type' => $type,
        'message' => $message,
        'data' => $data,
        'server' => [
            'REQUEST_METHOD' => $_SERVER['REQUEST_METHOD'] ?? 'N/A',
            'HTTP_ORIGIN' => $_SERVER['HTTP_ORIGIN'] ?? 'N/A',
            'REMOTE_ADDR' => $_SERVER['REMOTE_ADDR'] ?? 'N/A',
            'HTTP_USER_AGENT' => $_SERVER['HTTP_USER_AGENT'] ?? 'N/A',
        ],
        'headers' => getallheaders(),
    ];
    
    file_put_contents(
        $_SERVER['DOCUMENT_ROOT'] . '/errors.txt',
        json_encode($logEntry, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n\n",
        FILE_APPEND
    );
}

// Add detailed logging for reCAPTCHA verification
function verifyRecaptchaEnterpriseToken($token) {
    $apiKey = 'AIzaSyCxdtjXlWHYnXKOj7V_hXXd7UWlaOUalks';
    $projectId = 's-m-current-reca-1734961162222';
    $url = "https://recaptchaenterprise.googleapis.com/v1/projects/{$projectId}/assessments?key={$apiKey}";

    $data = [
        'event' => [
            'token' => $token,
            'siteKey' => '6Lduy6MqAAAAACGAIFuC4p5RmL8z1C166sydvTup',
            'expectedAction' => 'SUBMIT'
        ]
    ];

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Accept: application/json',
            'Referer: https://superagentur-marketing.de'
        ],
        CURLOPT_VERBOSE => true
    ]);

    $response = curl_exec($ch);
    $verbose = curl_getinfo($ch);
    $error = curl_error($ch);
    
    logError("reCAPTCHA API request details", [
        'curl_info' => $verbose,
        'curl_error' => $error,
        'response' => $response
    ], 'DEBUG');

    curl_close($ch);

    if ($response === false) {
        logError("reCAPTCHA API request failed", [
            'curl_error' => $error
        ]);
        return false;
    }

    $result = json_decode($response, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        logError("reCAPTCHA API response JSON parse error", [
            'json_error' => json_last_error_msg(),
            'raw_response' => $response
        ]);
        return false;
    }

    if (!isset($result['tokenProperties']['valid']) || !$result['tokenProperties']['valid']) {
        logError("reCAPTCHA token invalid", [
            'response' => $result
        ]);
        return false;
    }

    return true;
}

$formattedData = []; // Tüm durumlarda kullanılabilir olmasını sağlamak için tanımlandı.

// Main request handling
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $rawInput = file_get_contents('php://input');
        $data = json_decode($rawInput, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            logError("JSON parsing error", [
                'error' => json_last_error_msg(),
                'raw_input' => $rawInput
            ]);
            throw new Exception("Invalid JSON data received");
        }

        // Log incoming request
        logError("Incoming request data", $data, 'INFO');

        $recaptchaToken = $data['recaptchaToken'] ?? null;
        if (!$recaptchaToken) {
            logError("Missing reCAPTCHA token", $data);
            throw new Exception("reCAPTCHA token is required");
        }

        if (!verifyRecaptchaEnterpriseToken($recaptchaToken)) {
            logError("reCAPTCHA verification failed", [
                'token' => substr($recaptchaToken, 0, 20) . '...',
                'data' => $data
            ]);
            throw new Exception("reCAPTCHA verification failed");
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
            // Log success
            logError("Email sent successfully", [
                'to' => $mail->getToAddresses(),
                'subject' => $subject
            ], 'SUCCESS');

            echo json_encode([
                "message" => "Mail sent successfully",
                "status" => 200,
                "verification" => true,
                "formattedData" => $formattedData
            ]);
        } else {
            logError("Email sending failed", [
                'error' => $mail->ErrorInfo,
                'to' => $mail->getToAddresses(),
                'subject' => $subject,
                'formattedData' => $formattedData
            ]);
            throw new Exception("Failed to send email: " . $mail->ErrorInfo);
        }
    } catch (Exception $e) {
        $errorMessage = $e->getMessage();
        logError("Request failed", [
            'error' => $errorMessage,
            'trace' => $e->getTraceAsString(),
            'data' => $data ?? null
        ]);

        http_response_code(400);
        echo json_encode([
            "message" => $errorMessage,
            "status" => 400,
            "verification" => false,
            "debug_info" => [
                "error" => $errorMessage,
                "timestamp" => date('Y-m-d H:i:s')
            ]
        ]);
    }
} else {
    logError("Invalid request method", [
        'method' => $_SERVER['REQUEST_METHOD']
    ]);
    
    http_response_code(405);
    echo json_encode([
        "message" => "Method not allowed",
        "status" => 405
    ]);
}


   