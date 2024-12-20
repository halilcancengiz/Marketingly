<?php
// Autoload
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// .env kullanımı (isteğe bağlı)
if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

// Ortam değişkenlerini al
$SMTP_USER = getenv('SMTP_USER');
$SMTP_PASSWORD = getenv('SMTP_USER_PASSWORD');
$SMTP_FROM = getenv('SMTP_FROM');
$SMTP_TO = getenv('SMTP_TO');

// CORS ayarları (genellikle aynı domain üzerinden çağrılacağı için gerek yok ama yine de ekleyebiliriz)
$allowed_origins = ['https://superagentur-marketing.de', 'http://localhost:5173'];
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Routing yapısı
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

if ($request_uri === '/api/' && $method === 'GET') {
    http_response_code(200);
    echo "Server is running and ready to receive requests.";
    exit;
}

if ($request_uri === '/api/send-mail' && $method === 'POST') {
    sendMail($SMTP_USER, $SMTP_PASSWORD, $SMTP_FROM, $SMTP_TO);
    exit;
}

// 404 fallback
http_response_code(404);
echo "Not Found";
exit;

function sendMail($SMTP_USER, $SMTP_PASSWORD, $SMTP_FROM, $SMTP_TO) {
    $data = json_decode(file_get_contents('php://input'), true);

    $firstname = !empty(trim($data['firstname'] ?? '')) ? trim($data['firstname']) : "Keine Angabe";
    $lastname = !empty(trim($data['lastname'] ?? '')) ? trim($data['lastname']) : "Keine Angabe";
    $email = !empty(trim($data['email'] ?? '')) ? trim($data['email']) : "Keine Angabe";
    $phonenumber = !empty(trim($data['phonenumber'] ?? '')) ? trim($data['phonenumber']) : "Keine Angabe";
    $companyname = !empty(trim($data['companyname'] ?? '')) ? trim($data['companyname']) : "Kein Firmenname";
    $street = !empty(trim($data['street'] ?? '')) ? trim($data['street']) : "Keine Angabe";
    $zipcode = !empty(trim($data['zipcode'] ?? '')) ? trim($data['zipcode']) : "Keine Angabe";
    $location = !empty(trim($data['location'] ?? '')) ? trim($data['location']) : "Keine Angabe";
    $message = !empty(trim($data['message'] ?? '')) ? trim($data['message']) : "Keine Angabe";
    $pn = !empty(trim($data['pn'] ?? '')) ? trim($data['pn']) : "Keine Angabe";

    $subject = "Anfrage - Website - {$companyname} - {$lastname} - " . date('d.m.Y');

    $mailTemplate = "
      <div style=\"color: #000000; line-height: 1.6;\">
        <p><strong>Vorname:</strong> {$firstname}</p>
        <p><strong>Nachname:</strong> {$lastname}</p>
        <p><strong>E-Mail:</strong> <a href=\"mailto:{$email}\">{$email}</a></p>
        <p><strong>Telefonnummer:</strong> {$phonenumber}</p>
        <p><strong>Firma:</strong> {$companyname}</p>
        <p><strong>Straße, Nr.:</strong> {$street}</p>
        <p><strong>PLZ:</strong> {$zipcode}</p>
        <p><strong>Ort:</strong> {$location}</p>
        <p><strong>Nachricht:</strong> {$message}</p>
        <hr />
        <p><strong>Date:</strong> " . date('d.m.Y') . "</p>
        <p><strong>Contact Source:</strong> {$pn}</p>
      </div>
    ";

    $mail = new PHPMailer(true);

    try {
        // SMTP ayarları
        $mail->isSMTP();
        $mail->Host = 'smtp.ionos.de';
        $mail->Port = 465; 
        $mail->SMTPAuth = true;
        $mail->Username = $SMTP_USER;
        $mail->Password = $SMTP_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

        $mail->setFrom($SMTP_FROM, 'Website Anfrage');
        $mail->addAddress($SMTP_TO);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $mailTemplate;

        $mail->send();
        http_response_code(200);
        echo "Email was sent successfully";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Email could not be sent: " . $mail->ErrorInfo;
    }
}