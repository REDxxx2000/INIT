<?php session_start();?>
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

  <link href="/css/app.css" rel="stylesheet">
  <script src="/js/contact.js"></script>
    
    
    <!-- Iconos locales -->
    <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon"/>
    <link href="images/favicon.png" rel="apple-touch-icon"/>
</head>
<body class="body" onload="init();" ondrag="return false;" ondragenter="return false;" ondragleave="return false;" ondragend="return false;" ondragover="return false;" 
ondragstart="return false;" ondrop="return false;" onscroll="return false;">
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
    
        <form id="formula" action="">
        <label for="exampleFormControlInput1" class="form-label">
            Name</label>&emsp;<a id="delX" class="btn" onclick="inputX('nam');">X</a>    
        <input id="txtNam" class="form-control" 
        type="text" placeholder="Insert your name" 
        aria-label=".form-control example"  onkeypress="return noCharTxt(event);" onkeydown="return noCharTxt(event);"  minlength="3" maxlength="20"  required/>
        
        
            <label for="exampleFormControlInput1" class="form-label">
            Email </label>&emsp;<a id="delX" class="btn" onclick="inputX('mail');">X</a>   
        <input id="txtMail" class="form-control" 
        type="email" placeholder="Insert your e-mail" 
        aria-label=".form-control example" onkeypress="return noCharMail(event);" onkeydown="return noCharMail(event);"  minlength="3" maxlength="40"  required/>
        
        <label for="exampleFormControlInput1" class="form-label">
            Subject</label> &emsp;<a id="delX" class="btn" onclick="inputX('ctry');">X</a>      
        <input id="txtCtry" class="form-control" 
        type="text" placeholder="Insert subject" 
        aria-label=".form-control example" onkeypress="return noCharTxt(event);" onkeydown="return noCharTxt(event);"  minlength="3" maxlength="20"  required/>
        
        
        <label for="exampleFormControlInput1" class="form-label">
                Message</label>  &emsp;<a id="delX" class="btn" onclick="inputX('mss');">X</a>     
        <input id="txtMesssage" class="form-control" 
        type="text" placeholder="Insert your message" 
        aria-label=".form-control example" onkeypress="return noCharTxt(event);" onkeydown="return noCharTxt(event);"  minlength="3" maxlength="20"  required/>
        
        
        <input id="validd" type="submit" class="btn" onclick="valUsr();" onfocus="valUsr();" value="Submit"></input>
        </form>
        

    </div>
   
  </section>

</body>
</html>