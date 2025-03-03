
<?php
session_start();
$pos = null;
$usr = null;
$age = null;
$mail = null;
$ctry = null;
$pass = null;
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
  $nam = $_POST['txtNam'];
  $usr =$_POST['txtUsr'];
  $age =$_POST['txtAge'];
  $mail =$_POST['txtMail'];
  $ctry =$_POST['txtCtry'];
  $pass =$_POST['txtPass'];

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

}else{}
?>
<!DOCTYPE html>
<html lang="en" ondrag="return false;" ondragenter="return false;" ondragleave="return false;" ondragend="return false;" ondragover="return false;" ondragstart="return false;" ondrop="return false;" onscroll="return false;">
<head ondrag="return false;" ondragenter="return false;" ondragleave="return false;" ondragend="return false;" ondragover="return false;" ondragstart="return false;" ondrop="return false;" onscroll="return false;">
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

  <link href="/css/app.css" rel="stylesheet">

    <script src="/js/access.js"></script>

    <!-- Iconos locales -->
    <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon"/>
    <link href="images/favicon.png" rel="apple-touch-icon"/>
</head>
<body class="body" onload="init();" ondrag="return false;" ondragenter="return false;" ondragleave="return false;" ondragend="return false;" ondragover="return false;" ondragstart="return false;" ondrop="return false;" onscroll="return false;">
<img id="backG" />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a id="init" class="navbar-brand" href="index.html">INIT
      
        <img id="initts" src="/images/logo.png" alt="logo">
      </a>
      <button id="menu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="about-us.html">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="app.html">APP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pricing.html">PRICING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.php">CONTACT</a>
          </li>
          <li class="nav-item">
            <a id="lgin" class="nav-link"  href="access.php">LOG IN</a>
          </li>
          <li class="nav-item">
            <a id="sgnup" class="nav-link" href="sgnUp.php">SIGN UP</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Hero Section -->
  <section  class="hero-section">
    
    <div id="heroes" class="container">
        <div id="subtitle" class="container-fluid">
    <hr>
    <img ID="imgCarT" src="/images/usr.jpg"/>
    <hr>
    </div>
    
        <form id="formula"  action="">
        
        
        <label for="txtMail" class="form-label">
            Write your e-mail </label>&emsp;<a id="delX" class="btn" onclick="inputX('mail');">X</a>
        <input id="txtMail" class="form-control" 
        type="email" placeholder="Insert your e-mail" 
        aria-label="default input example" onkeypress="return noCharMail(event);" onkeydown="return noCharMail(event);" minlength="5" maxlength="40"   required><!--pattern="[A-Za-z0-9_]{,30}[@]{1,1}[a-zA-Z0-9]{,30}[.]{1,1}[a-zA-Z0-9]{3,5} "-->
        
        
        <br>
        <center><input id="validd" type="submit" class="btn" onclick="sendPass();" onfocus="sendPass();" value="Send"></input></center>   
        
        </form>
        

    </div>
   
  </section>

</body>
</html>