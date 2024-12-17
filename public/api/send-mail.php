<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: POST, OPTIONS");
    }
    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    exit(0);
}

header('Content-Type: application/json; charset=utf-8');

// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data and log it
$raw_data = file_get_contents('php://input');
error_log('Received data: ' . $raw_data);
$data = json_decode($raw_data, true);

// Validate required fields
if (!isset($data['firstname']) || !isset($data['lastname']) || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Missing required fields',
        'received_data' => $data
    ]);
    exit();
}

// Prepare email content
$to = 'your-email@domain.com'; // Replace with your email
$subject = 'Neue Kontaktanfrage von der Website';
$message = "
<html>
<head>
    <title>Neue Kontaktanfrage</title>
</head>
<body>
    <h2>Neue Kontaktanfrage</h2>
    <p><strong>Vorname:</strong> {$data['firstname']}</p>
    <p><strong>Nachname:</strong> {$data['lastname']}</p>
    <p><strong>E-Mail:</strong> {$data['email']}</p>
    <p><strong>Telefon:</strong> " . ($data['phonenumber'] ?? '• Keine Angabe') . "</p>
    <p><strong>Nachricht:</strong> " . ($data['message'] ?? '• Keine Angabe') . "</p>
</body>
</html>
";

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

if ($mail_sent) {
    echo json_encode(['message' => 'Email sent successfully']);
} else {
    $error_message = error_get_last();
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email',
        'details' => $error_message ? $error_message['message'] : 'Unknown error occurred'
    ]);
} 