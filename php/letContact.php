<?php
session_start();
$pos = null;
$sen = null;
$usr = null;
$age = null;
$mail = null;
$ctry = null;
$pass = null;
$subj = null;
$mess = null;
?>
<?php
if($_SESSION!=null&&$_COOKIE!=null){
  $pos = true;
  $nam = $_SESSION['txtNam'];
  $usr =$_SESSION['txtUsr'];
  $age =$_SESSION['txtAge'];
  $mail =$_SESSION['txtMail'];
  $ctry =$_SESSION['txtCtry'];
  $pass =$_SESSION['txtPass'];

}else{}
if($_POST!=null){
  $pos = true;
  $sen = true;
  $subj =$_POST['txtSubj'];
  $mess =$_POST['txtMess'];
  
  $_SESSION['txtNam']=$nam ;
  $_SESSION['txtUsr']=$usr ;
  $_SESSION['txtAge']=$age ;
  $_SESSION['txtMail']=$mail ;
  $_SESSION['txtCtry']=$ctry ;
  $_SESSION['txtPass']=$pass ;

  $_COOKIE['txtNam']=$nam ;
  $_COOKIE['txtUsr']=$usr ;
  $_COOKIE['txtAge']=$age ;
  $_COOKIE['txtMail']=$mail ;
  $_COOKIE['txtCtry']=$ctry ;
  $_COOKIE['txtPass']=$pass ;
// $to      = $mail;
// $subject = $subj;
// $message = $mess;
// $headers = 'From: pablo.sorzano.egd@gmail.com'       . "\r\n" .
//               'Reply-To: pablo.sorzano.egd@gmail.com' . "\r\n" .
//             'X-Mailer: PHP/' . phpversion();

// if(mail($to, $subject, $message, $headers)){
//   echo "SUCCESS";
// }else{
//   echo "ERROR";
// }

}else{}
?>
<!DOCTYPE html>
<html lang="en" ondrag="return false;" ondragenter="return false;" ondragleave="return false;" ondragend="return false;" ondragover="return false;" ondragstart="return false;" ondrop="return false;" onscroll="return false;">
<head ondrag="return false;" ondragenter="return false;" ondragleave="return false;" ondragend="return false;" ondragover="return false;" 
ondragstart="return false;" ondrop="return false;" onscroll="return false;">
    <meta charset="utf-8"/>
    <title>INIT</title>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    
    <!-- Bootstrap CSS -->
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <!-- jQuery -->
  <script src="/js/jQuery-3.7.1.min.js"></script>
  <!-- Bootstrap JS (opcional, solo si necesitas componentes interactivos) -->
  <script src="/js/bootstrap.bundle.js"></script>
    
      
  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/roboto-v47-latin-200.woff2"    crossorigin  />
  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/roboto-v47-latin-900.woff2"    crossorigin  />
  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/roboto-v47-latin-regular.woff2"    crossorigin  />

  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/oswald-v53-latin-200.woff2"    crossorigin  />
  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/oswald-v53-latin-700.woff2"    crossorigin  />
  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/oswald-v53-latin-regular.woff2"    crossorigin  />

  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/ubuntu-v20-latin-300.woff2"    crossorigin  />
  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/ubuntu-v20-latin-700.woff2"    crossorigin  />
  <link rel="preload"    as="font"    type="font/woff2"    href="/fonts/ubuntu-v20-latin-regular.woff2"    crossorigin  />

  <link href="/css/about-us.css" rel="stylesheet">
  <script src="/js/letContact.js"></script>
    <style>
      #bout-us::after{
  background-color: rgb(255, 174, 0);
}#app::after{
  background-color: rgb(204, 0, 255);
}#pricin::after{
  background-color: rgb(0, 255, 213);
}#contact::after{
  background-color: rgb(0, 255, 98);
}label{
        text-align:left;
        
      }#formula{
        text-align:left;
      }#delX1{
        text-align: center;
        align-items: center;
        font-size: .35rem;
        
      }#delX2{
        text-align: center;
        align-items: center;
        font-size: .35rem;
        
      }#delX3{
        text-align: center;
        align-items: center;
        font-size: .35rem;
        
      }#delX4{
        text-align: center;
        align-items: center;
        font-size: .35rem;
        
      }input:disabled{
        cursor:not-allowed;
        
      }input{
        cursor:text;
      }#txtUsr::after{
  background-color: rgb(255, 255, 255);
  opacity: 1%;
}#txtUsr{
  font-family: Oswald, serif;
      font-weight: 200;
      font-size: 1.2rem;
}
    </style>
    
    <!-- Iconos locales -->
    <link href="/images/favicon.png" rel="shortcut icon" type="image/x-icon"/>
    <link href="/images/favicon.png" rel="apple-touch-icon"/>
</head>
<body class="body" onload="" ondrag="return false;" ondragenter="return false;" ondragleave="return false;" ondragend="return false;" ondragover="return false;" 
ondragstart="return false;" ondrop="return false;" onscroll="return false;">
<img id="backG" />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a id="init" class="navbar-brand" href="index.php">INIT
      
        <img id="initts" src="/images/logo.png" alt="logo">
      </a>
      <button id="menu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a id="bout-us" class="nav-link" href="about-us.php">ABOUT US</a>
          </li>
          <li  class="nav-item">
            <a id="app" class="nav-link" href="app.php">APP</a>
          </li>
          <li class="nav-item">
            <a id="pricin" class="nav-link" href="pricing.php">PRICING</a>
          </li>
          <li  class="nav-item">
            <a id="contact" class="nav-link" href="letContact.php">CONTACT</a>
          </li>
          <li class="nav-item">
          <a id="imgUsr" class="nav-link" href="usr.php">
          <center>
          <?php if($pos){echo "<div id='txtUsr' style='border-radius:20px;position: absolute;right: 37%;top: 32%;' class='nav-link'>$usr</div>";}else{}?>  
          <img id="imgUsr" src="/images/usr.jpg" alt="logo" height="80px" 
          style="
          border-radius:20px;
          position: absolute;
          right: 28%;
          top: 2%;
          
          "></center>
          </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Hero Section -->
  <section  class="hero-section">
    
    <div id="hero" class="container">
        <div id="subtitle" class="container-fluid">
    <hr>
    <div id="subtitle">MANAGEMENT</div>
    <p>
    <div id="txtM">PABLO SORZANO TORRES
    <br>+52 999 418 9498
    <br ><span id="txtmin">chester.redBain@gmail.com</span>
    </p>
    <hr>
    </div>
    
        <form id="formula" action="" method="post">
        <label for="exampleFormControlInput1" class="form-label">
            Name</label>&emsp;<a id="delX1" style="display:none;" class="btn" onclick="inputX('nam');">X</a>    
        <input disabled
        value="<?php if($pos){echo $nam;}else{} ?>"  id="txtNam" class="form-control" 
        type="text" placeholder="Insert your name" 
        aria-label=".form-control example"  onkeypress="return noCharTxt(event);" onkeydown="return noCharTxt(event);"  minlength="3" maxlength="20"  required/>
        
        
            <label for="exampleFormControlInput1" class="form-label">
            Email </label>&emsp;<a id="delX2" style="display:none;" class="btn" onclick="inputX('mail');">X</a>   
        <input disabled 
        value="<?php if($pos){echo $mail;}else{} ?>" id="txtMail" class="form-control" 
        type="email" placeholder="Insert your e-mail" 
        aria-label=".form-control example" onkeypress="return noCharMail(event);" onkeydown="return noCharMail(event);"  minlength="3" maxlength="40"  required/>
        
        <label for="exampleFormControlInput1" class="form-label">
            Subject</label> &emsp;<a id="delX3" style="display:none;" class="btn" onclick="inputX('ctry');">X</a>      
        <input disabled 
         id="txtCtry" name="txtSubj" class="form-control" 
        type="text" placeholder="Insert subject" 
        aria-label=".form-control example" onkeypress="return noCharTxt(event);" onkeydown="return noCharTxt(event);"  minlength="3" maxlength="20"  required/>
        
        
        <label for="exampleFormControlInput1" class="form-label">
                Message</label>  &emsp;<a id="delX4" style="display:none;" class="btn" onclick="inputX('mss');">X</a>     
        <input disabled 
         id="txtMesssage" name="txtMess" class="form-control" 
        type="text" placeholder="Insert your message" 
        aria-label=".form-control example" onkeypress="return noCharTxt(event);" onkeydown="return noCharTxt(event);"  minlength="3" maxlength="20"  required/>
        
        
        <center><input id="validd" type="submit" style="display:none;" class="btn" 
        onclick="valUsr();" 
        onfocus="valUsr();" value="Send"></input>
        <input id="editt" type="button" class="btn" onclick="editTxt();"  value="Edit"></input></center>
        </form>
        
    
    </div>
    
   
  </section>
  
</body>
</html>
