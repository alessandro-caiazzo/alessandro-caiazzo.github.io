<?php
if(isset($_POST['email'])) {
    $email_to = "alessandro.caiazzo26.com";
    $email_subject = "Contact Form Submission";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $email_message = "Form details below.\n\n";
    $email_message .= "Name: ".$name."\n";
    $email_message .= "Email: ".$email."\n";
    $email_message .= "Message: ".$message."\n";
    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    echo "Thank you for contacting us. We will be in touch with you very soon.";
}
?>
