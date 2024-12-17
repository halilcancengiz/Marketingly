<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error.log');

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    // Log raw input
    $raw_input = file_get_contents('php://input');
    error_log("Raw input: " . $raw_input);

    if (empty($raw_input)) {
        throw new Exception('No input data received');
    }

    // Parse JSON
    $data = json_decode($raw_input, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON: ' . json_last_error_msg());
    }

    // Log decoded data
    error_log("Decoded data: " . print_r($data, true));

    // Validate required fields
    if (empty($data['firstname']) || empty($data['lastname']) || empty($data['email'])) {
        throw new Exception('Missing required fields');
    }

    // Prepare email content
    $to = 'diferansiyelkopya@gmail.com';
    $subject = 'Neue Kontaktanfrage von der Website';
    $message = "
    <html>
    <head><title>Neue Kontaktanfrage</title></head>
    <body>
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Vorname:</strong> {$data['firstname']}</p>
        <p><strong>Nachname:</strong> {$data['lastname']}</p>
        <p><strong>E-Mail:</strong> {$data['email']}</p>
        <p><strong>Telefon:</strong> " . ($data['phonenumber'] ?? '• Keine Angabe') . "</p>
        <p><strong>Nachricht:</strong> " . ($data['message'] ?? '• Keine Angabe') . "</p>
    </body>
    </html>";

    // Email headers
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        'From: ' . $data['email'],
        'Reply-To: ' . $data['email'],
        'X-Mailer: PHP/' . phpversion()
    ];

    // Send email
    $mail_sent = mail($to, $subject, $message, implode("\r\n", $headers));
    
    if (!$mail_sent) {
        $error = error_get_last();
        throw new Exception('Failed to send email: ' . ($error ? $error['message'] : 'Unknown error'));
    }

    // Success response
    $response = ['status' => 'success', 'message' => 'Email sent successfully'];
    echo json_encode($response);
    exit();

} catch (Exception $e) {
    error_log("Error in send-mail.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage(),
        'debug' => [
            'raw_input' => $raw_input ?? null,
            'error' => error_get_last(),
            'php_version' => phpversion()
        ]
    ]);
    exit();
} 