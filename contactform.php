<?php
if(isset($_POST['submit'])){
 $name = $_POST['name'];
 $lastname = $_POST['lastname'];
 $city = $_POST['city'];
 $estate = $_POST['estate'];
 $mailFrom = $_POST['mail'];
 $phone = $_POST['phone'];
 $message = $_POST['message'];



 $mailTo= "info@lucklaend.com";
 $headers= "From: ".$mailFrom;
 $txt = "Has recibido un mensaje de ".$name.".\n\n".$message;


 mail($mailTo, $subject, $txt, $headers);
 header("Location: index.php?mailsend");

}

