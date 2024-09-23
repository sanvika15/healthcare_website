<?php
// Configuration
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'pregnancy_pal';

// Create connection
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $basicInfo = json_decode($_POST['basicInfo'], true);
    $missedPeriods = $_POST['missedPeriods'];
    $kitResult = $_POST['kitResult'];

    // Validate form data
    if (!validateFormData($basicInfo, $missedPeriods, $kitResult)) {
        echo json_encode(['message' => 'Invalid form data']);
        exit;
    }

    // Insert data into database
    $stmt = $conn->prepare("INSERT INTO form_data_1 (name, age, contact, missed_periods, kit_result) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $basicInfo['name'], $basicInfo['age'], $basicInfo['contact'], $missedPeriods, $kitResult);
    $stmt->execute();

    // Return success message
    echo json_encode(['message' => 'Form submitted successfully!']);
} else {
    echo json_encode(['message' => 'Invalid request']);
}

// Close connection
$conn->close();

function validateFormData($basicInfo, $missedPeriods, $kitResult) {
    // Validate basic info
    if (!$basicInfo['name'] || !$basicInfo['age'] || !$basicInfo['contact']) {
        return false;
    }

    // Validate missed periods
    if ($missedPeriods !== 'yes' && $missedPeriods !== 'no') {
        return false;
    }

    // Validate kit result
    if ($kitResult !== 'positive' && $kitResult !== 'negative') {
        return false;
    }

    return true;
}
?>