<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Log In</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="logIn.css">
    <style>
        .error-message {
            color: red;
            font-weight: bold;
            text-align: center;
            margin-top: 10px;
            padding: 10px;
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 5px;
        }
        .signup-success {
            color: green;
            font-weight: bold;
            text-align: center;
            margin-top: 10px;
            padding: 10px;
            background-color: #d4edda;
            border: 1px solid #c3e6cb;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = mysqli_connect($servername, $username, $password, $dbname);
$error_message = "";
$signup_success_message = "";

if(isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) == 1) {
        $_SESSION['email'] = $email;
        header("Location: basketball.html");
    } else {
        $error_message = "Incorrect email or password";
    }
}

// Sign up functionality
if(isset($_POST['signup'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    
    if(mysqli_query($conn, $sql)) {
        $signup_success_message = "Sign up successful! You can now log in.";
    } else {
        $error_message = "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>

<div class="container">
<div class="wrapper">
    <div class="card-switch">
        <label class="switch">
           <input class="toggle" type="checkbox">
           <span class="slider"></span>
           <span class="card-side"></span>
           <div class="flip-card__inner">
              <div class="flip-card__front">
                 <div class="title">Log in</div>
                 <form action="" method="POST" class="flip-card__form">
                    <input type="text" placeholder="Email" name="email" class="flip-card__input" required>
                    <input type="password" placeholder="Password" name="password" class="flip-card__input" required>
                    <input type="submit" name="login" value="Login">
                    <?php
                        if (!empty($error_message)) {
                            echo "<div class='error-message'>$error_message</div>";
                        }
                    ?>
                 </form>
              </div>
              <div class="flip-card__back">
                 <div class="title">Sign up</div>
                 <form action="" method="POST" class="flip-card__form">
                    <input type="text" placeholder="Name" name="name" class="flip-card__input" required>
                    <input type="email" placeholder="Email" name="email" class="flip-card__input" required>
                    <input type="password" placeholder="Password" name="password" class="flip-card__input" required>
                    <input type="submit" name="signup" value="Register">
                    <?php
                        if (!empty($signup_success_message)) {
                            echo "<div class='signup-success'>$signup_success_message</div>";
                        }
                    ?>
                 </form>
              </div>
           </div>
        </label>
    </div>   
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
