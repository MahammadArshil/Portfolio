<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format.'); window.history.back();</script>";
        exit();
    }

    // Email configuration
    $to = "mahammadarshil007@gmail.com"; // Replace with your Gmail address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you for your message! I\'ll get back to you soon.'); window.location.href = 'your-portfolio-url.html';</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Please try again.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Invalid access.'); window.history.back();</script>";
}
?>
