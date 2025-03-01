var mail = this.document.getElementById('txtMail');
var nam = this.document.getElementById('txtNam');
var pass = this.document.getElementById('txtPass');
var ctry = this.document.getElementById('txtCtry');
var usr = this.document.getElementById('txtUsr');
var age = this.document.getElementById('txtAge');

var form = this.document.getElementById('formula');

var btn = this.document.getElementById('validd');
var btn1 = this.document.getElementById('editt');
var p=this.document.getElementById('regreso');
var cont =0;

function init(){
mail = this.document.getElementById('txtMail');
nam = this.document.getElementById('txtNam');
pass = this.document.getElementById('txtPass');
ctry = this.document.getElementById('txtCtry');
usr = this.document.getElementById('txtUsr');
age = this.document.getElementById('txtAge');


  form = this.document.getElementById('formula');
  btn = this.document.getElementById('validd');


  mail.value="";
  nam.value="";
  pass.value="";
  ctry.value="";
  usr.value="";
  age.value="";
  form.action="";
  btn.onclick="valUsr();";
  
}
function valUsr(){
  
  mail = this.document.getElementById('txtMail');
  nam = this.document.getElementById('txtNam');
  pass = this.document.getElementById('txtPass');
  ctry = this.document.getElementById('txtCtry');
  usr = this.document.getElementById('txtUsr');
  age = this.document.getElementById('txtAge');

  cont=0;

  form = this.document.getElementById('formula');
  btn = this.document.getElementById('validd');
  form.action="";
  btn.onclick="valUsr();";
  
  if(mail.value!=''&&nam.value!=''&&pass.value!=''&&ctry.value!=''&&usr.value!=''&&age.value!=''){
    //alert('inicio de validacion');
    var nn= noCharSPTxt(nam.value);
    var mm= noCharSP(mail.value);
    var cc= noCharSPTxt(ctry.value); 
    var ms= noCharSPass(pass.value);
    var ps= noCharSPass(usr.value);
    var aa= noCharSPNmbr(age.value);
    
 
    //alert(
     // nn+'  name '+
    //  mm+'  mail '+
    //  cc+'  ctry '+
    //  ms+'  pass '+
    //  ps+'  usr '+
    //  aa+'  age '
    //);
    if(mm=='mail'&&nn=='txt'&&ms=='pass'&&cc=='txt'&&ps=='pass'&&aa=='nmbr'){
      alert('Sent correctly');
      Send();    
      
      }else{
              //alert('Ingrese valores correctos');
              init();
      }
  }else{
    //alert('Ingrese valores correctos');
    init();
}
  
  //form.action="sgnup.html";
  //btn.onclick="";
  //btn.focus();
  
}
function send(){
  p=this.document.getElementById('regreso');
          form.action="usr.php";
          form.method="post";
          btn.onclick="";
          btn.focus();
          }
function editTst(){
  mail = this.document.getElementById('txtMail');
  nam = this.document.getElementById('txtNam');
  pass = this.document.getElementById('txtPass');
  ctry = this.document.getElementById('txtCtry');
  usr = this.document.getElementById('txtUsr');
  age = this.document.getElementById('txtAge');

  form = this.document.getElementById('formula');

  btn = this.document.getElementById('validd');
  btn1 = this.document.getElementById('editt');
  dx1 = this.document.getElementById('delX1');
  dx2 = this.document.getElementById('delX2');
  dx3 = this.document.getElementById('delX3');
  dx4 = this.document.getElementById('delX4');
  dx5 = this.document.getElementById('delX5');
  dx6 = this.document.getElementById('delX6');

  //alert('');
  dx1.style.cssText="display:box;";
  dx2.style.cssText="display:box;";
  dx3.style.cssText="display:box;";
  dx4.style.cssText="display:box;";
  dx5.style.cssText="display:box;";
  dx6.style.cssText="display:box;";
  btn.style.cssText="display:box;";
  btn1.style.cssText="display:none;";
  nam.disabled=false;
  mail.disabled=false;
  pass.disabled=false;
  ctry.disabled=false;
  usr.disabled=false;
  age.disabled=false;
  
}
function noCharSP(e){
  
  var key = e.split("");
  var kul=0;
  
  var arr=0;
    //alert(key);
    var com="1234567890abcdefghijklmnopqrstuvwxyzñABCDEFGHIJKLMNOPQRSTUVWXYZÑ.@";
    var parative = com.split("");
    //alert(parative.length);
    for(j=0;j<key.length;j++){
      for(i=0;i<parative.length;i++){
        if(key[j]==parative[i]){
          //alert(key[j]+' match mail '+parative[i]);
          kul++;
          if(key[j]=='@'){arr++;}else{}
        
      }
    }
}
if(arr!=1){
  kul-=2;
}else{}
  //alert(kul+' longit '+key.length);
  if(key.length<3){
    //alert('Error, deben ser más de 3 caracteres');
    init();
    if(cont==0){
      //alert('Inserta valores correctos');
      init();
    }else{}
            cont++;
      init();

  }else{
    //alert('Todo bien parecer ser');
    if(kul==key.length){
        //alert('Todo bien en mail');
        return 'mail';
    }else if(kul!=key.length){
          if(cont==0){alert('Inserta valores correctos');}else{}
          cont++;
          init();
          return 'error';
    }else{
      //alert('Inserta valores correctos');
      cont++;
          init();
          return 'error';
    }
  }

  
  //var cumple = parative.every(function esCharSp(valor){
    //  alert(key);
    //  alert(valor);
    //  return key == valor; 
    //});
  
}
function noCharSPass(e){
 
  var key = e.split("");
  var kul=0;
    //alert(key);
    var com="1234567890abcdefghijklmnopqrstuvwxyzñABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
    var parative = com.split("");
    //alert(parative.length);
    for(j=0;j<key.length;j++){
      for(i=0;i<parative.length;i++){
        if(key[j]==parative[i]){
          //alert(key[j]+' match pass '+parative[i]);
          kul++;
          
        }else{
          //alert(key[j]+' no match '+parative[i]);}
        }
    }
  }
  //alert(kul+' longit '+key.length);
  if(key.length<3){
    //alert('Error, deben ser más de 3 caracteres');
    init();
    if(cont==0){
      //alert('Inserta valores correctos');
      init();
    }else{}
            cont++;
    init();
  }else{
    //alert('Todo bien parecer ser');
            if(kul==key.length){
                //alert('Todo bien en pass');
                return 'pass';
            }else if(kul!=key.length){
              if(cont==0){alert('Inserta valores correctos');}else{}
              cont++;
                  init();
                  return 'error';
            }else{
              //alert('Inserta valores correctos');
              cont++;
                  init();
                  return 'error';
            }
  }
  
  //var cumple = parative.every(function esCharSp(valor){
    //  alert(key);
    //  alert(valor);
    //  return key == valor; 
    //});
  
}
function noCharSPTxt(e){
  
  var key = e.split("");
  var kul=0;
    //alert(key);
    var com="abcdefghijklmnopqrstuvwxyzñABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
    var parative = com.split("");
    //alert(parative.length);
    for(j=0;j<key.length;j++){
      for(i=0;i<parative.length;i++){
        if(key[j]==parative[i]){
          //alert(key[j]+' match txt '+parative[i]);
          kul++;
          
        }else{
          //alert(key[j]+' no match '+parative[i]);}
        }
    }
  }
  //alert(kul+' longit '+key.length);
  if(key.length<3){
    //alert('Error, deben ser más de 3 caracteres');
    init();
    if(cont==0){
      //alert('Inserta valores correctos');
      init();
    }else{}
            cont++;
    init();
  }else{
    //alert('Todo bien parecer ser');
            if(kul==key.length){
                //alert('Todo bien en txt '+e);
                return 'txt';
            }else if(kul!=key.length){
              if(cont==0){alert('Inserta valores correctos');}else{}
              cont++;
                  init();
                  return 'error';
            }else{
              //alert('Inserta valores correctos');
              cont++;
              init();
                  return 'error';
            }
  }
  
  //var cumple = parative.every(function esCharSp(valor){
    //  alert(key);
    //  alert(valor);
    //  return key == valor; 
    //});
  
}
function noCharSPNmbr(e){
  
  var key = e.split("");
  var kul=0;
    //alert(key);
    var com="1234567890";
    var parative = com.split("");
    //alert(parative.length);
    for(j=0;j<key.length;j++){
      for(i=0;i<parative.length;i++){
        if(key[j]==parative[i]){
          //alert(key[j]+' match txt '+parative[i]);
          kul++;
          
        }else{
          //alert(key[j]+' no match '+parative[i]);}
        }
    }
  }
  //alert(kul+' longit '+key.length);
  if(key.length<1){
    //alert('Error, deben ser más de 3 caracteres');
    init();
    if(cont==0){
      //alert('Inserta valores correctos');
      init();
    }else{}
            cont++;
    init();
  }else{
    //alert('Todo bien parecer ser');
            if(kul==key.length){
                //alert('Todo bien en txt '+e);
                return 'nmbr';
            }else if(kul!=key.length){
              if(cont==0){alert('Inserta valores correctos');}else{}
              cont++;
                  init();
                  return 'error';
            }else{
              //alert('Inserta valores correctos');
              cont++;
              init();
                  return 'error';
            }
  }
  
  //var cumple = parative.every(function esCharSp(valor){
    //  alert(key);
    //  alert(valor);
    //  return key == valor; 
    //});
  
}

function forPass(){
  
  pass = this.document.getElementById('fPass');
  pass.onclick="";
  pass.href="forPass.html";
  pass.focus();

}
function noCharMail(e){
  var key = e.key;
  //alert(key);
  var com="1234567890abcdefghijklmnopqrstuvwxyzñABCDEFGHIJKLMNOPQRSTUVWXYZÑ.@";
  var parative = com.split("");
  //alert(parative.length);
  
  for(i=0;i<parative.length;i++){
    //alert(parative[i]);
    if(key==parative[i]){
    return true;
    }else{
    }
    
  }return false;
}
function noCharPass(e){
  var key = e.key;
  //alert(key);
  var com="1234567890abcdefghijklmnopqrstuvwxyzñABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
  var parative = com.split("");
  //alert(parative.length);
  
  for(i=0;i<parative.length;i++){
    //alert(parative[i]);
    if(key==parative[i]){
    return true;
    }else{
    }
    
  }return false;
}
function noCharTxt(e){
  var key = e.key;
  //alert(key);
  var com="abcdefghijklmnopqrstuvwxyzñABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
  var parative = com.split("");
  //alert(parative.length);
  
  for(i=0;i<parative.length;i++){
    //alert(parative[i]);
    if(key==parative[i]){
    return true;
    }else{
    }
    
  }return false;
}
function noCharNmbr(e){
  var key = e.key;
  //alert(key);
  var com="1234567890";
  var parative = com.split("");
  //alert(parative.length);
  
  for(i=0;i<parative.length;i++){
    //alert(parative[i]);
    if(key==parative[i]){
    return true;
    }else{
    }
    
  }return false;
}
function inputX(e){
  mail = this.document.getElementById('txtMail');
  nam = this.document.getElementById('txtNam');
  pass = this.document.getElementById('txtPass');
  ctry = this.document.getElementById('txtCtry');
  age = this.document.getElementById('txtAge');
  usr = this.document.getElementById('txtUsr');
  
  if(e=='mail'){
    mail.value="";
  }
  if(e=='nam'){
      nam.value="";
  }
  if(e=='pass'){
    pass.value="";
  }
  if(e=='ctry'){
    ctry.value="";
}if(e=='age'){
  age.value="";
}if(e=='usr'){
  usr.value="";
}
  

}
// <?php
//             if($_POST!=null){
//               $nam = $_POST['txtNam'];
//               $usr =$_POST['txtUsr'];
//               $age =$_POST['txtAge'];
//               $mail =$_POST['txtMail'];
//               $ctry =$_POST['txtCtry'];
//               $pass =$_POST['txtPass'];
//                       echo "<p>NAME: $nam</p><br>";
//                       echo "<p>EMAIL: $mail</p><br>";
//                       echo "<p>COUNTRY: $ctry</p><br>";
//                       echo "<p>AGE: $age<br>";
//                       echo "<p>USERNAME: $usr</p><br>";
//                       echo "<p>PASSWORD: $pass</p><br></br>";
//             }else{}
//             ?>