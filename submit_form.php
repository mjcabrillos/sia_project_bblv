<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "contact";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO contactform (email, message) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $message);

    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = $_POST['message']? $_POST['message']:'';
    $stmt->execute();

    $stmt->close();
    $conn->close();

    header("Location: Seromine.html?status=success");
    exit();
} else {
    header("Location:Seromine.html ");
    exit();
}

?>
