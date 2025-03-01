<?php
$to = 'pablo.sorzano.egd@gmail.com';
$subject = 'Hello from XAMPP!';
$message = 'This is a test';
$headers = "From: pablo.sorzano.egd@gmail.com\r\n";
if (mail($to, $subject, $message, $headers)) {
   echo "SUCCESS";
} else {
   echo "ERROR";
}
?>