<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number']
    $message = $_POST['message'];
    $from = 'From: APK'; 
    $to = 'ap_kanwar@outlook.com'; 
    $subject = 'Personal Website Message';
    $human = $_POST['human'];
         
    $body = "From: $name\n E-Mail: $email\n Phone Number: $phone\n Message:\n $message";
            
    if ($_POST['submit'] && $human == '4') {           
        if (mail ($to, $subject, $body, $from, $phone)) { 
       echo '<p>Your message has been sent!</p>';
   } else { 
       echo '<p>Something went wrong, go back and try again!</p>'; 
   } 
    } else if ($_POST['submit'] && $human != '4') {
   echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>
