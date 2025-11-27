<?php
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json');

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'status' => false,
        'statuscode' => 405,
        'message' => 'Method Not Allowed',
        'response' => null
    ]);
    exit;
}

// Check if ID parameter exists
if (!isset($_GET['id']) || empty($_GET['id'])) {
    http_response_code(400);
    echo json_encode([
        'status' => false,
        'statuscode' => 400,
        'message' => 'Job ID is required',
        'response' => null
    ]);
    exit;
}

$jobId = intval($_GET['id']);

try {
    // Fetch job details from database
    $stmt = $pdo->prepare('SELECT id, title, department, location, type, status, salary, tags, description, requirements, created_at FROM jobs WHERE id = ?');
    $stmt->execute([$jobId]);
    $job = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($job) {
        echo json_encode([
            'status' => true,
            'statuscode' => 200,
            'message' => 'Job fetched successfully',
            'job' => $job,
            'response' => $job
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            'status' => false,
            'statuscode' => 404,
            'message' => 'Job not found',
            'response' => null
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => false,
        'statuscode' => 500,
        'message' => 'Server error',
        'response' => $e->getMessage()
    ]);
}
