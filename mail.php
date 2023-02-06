<?php
if(isset($_POST['email'])){
        $mailTo = "info@adverteyez.com";
        $subject = "mail from website";
        $body = "New message from web
<br><br>
FROM: ".$_POST['email']."<br>
FIRSTNAME: ".$_POST['firstname']."<br>
LASTNAME: ".$_POST['lastname']."<br>
COMMENTS: ".$_POST['message']."<br>";   
        $headers = "To: Solido <".$mailTo.">\r\n";
        $headers .= "From: ".$_POST['email']." <".$_POST['email'].">\r\n";
        $headers .= "Content-Type: text/html";
        //envio destinatario
        $mail_success =  mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers);   
		
}
?>  