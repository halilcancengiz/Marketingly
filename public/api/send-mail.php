<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!isset($data['firstname']) || !isset($data['lastname']) || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
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
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
} 