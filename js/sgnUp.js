      var mail = this.document.getElementById('txtMail');
      var pass = this.document.getElementById('txtPass');
      var nam = this.document.getElementById('txtNam');
      var age = this.document.getElementById('txtAge');
      var ctry = this.document.getElementById('txtCtry');
      var usr = this.document.getElementById('txtUsr');

      var form = this.document.getElementById('formula');

      var btn = this.document.getElementById('validd');

      var cont = 0;
      function init(){
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
        nam = this.document.getElementById('txtNam');
        age = this.document.getElementById('txtAge');
        ctry = this.document.getElementById('txtCtry');
        usr = this.document.getElementById('txtUsr');

        form = this.document.getElementById('formula');
        btn = this.document.getElementById('validd');

      
        mail.value="";
        pass.value="";
        nam.value="";
        age.value="";
        ctry.value="";
        usr.value="";
        form.action="";
        btn.onclick="valUsr();";
      }
      function valUsr(){
        
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
        nam = this.document.getElementById('txtNam');
        age = this.document.getElementById('txtAge');
        ctry = this.document.getElementById('txtCtry');
        usr = this.document.getElementById('txtUsr');
        form = this.document.getElementById('formula');
        btn = this.document.getElementById('validd');
        form.action="";
        btn.onclick="valUsr();";
        cont=0;
        if(mail.value!=''&&pass.value!=''&&nam.value!=''&&age.value!=''&&ctry.value!=''&&usr.value!=''){
          //alert('inicio de validacion');
          var nn= noCharSPTxt(nam.value);
          var usr= noCharSPass(usr.value);
          var aa= noCharSPNmbr(age.value);
          var mm= noCharSP(mail.value); 
          var cc= noCharSPTxt(ctry.value);
          var pp= noCharSPass(pass.value);
          
          
         
          

          //alert(mm+'  valores '+pp+'  valores '+nn+'  valores '+aa+'  valores '+cc+'  valores '+usr);
          if(mm=='mail'&&pp=='pass'&&nn=='txt'&&aa=='nmbr'&&cc=='txt'&&usr=='pass'){
                alert('Registered correctly');
                form.action="/accessV/index.php";
                btn.onclick="";
                btn.type="submit";
                btn.focus();
            }else{
                    //alert('Valores no coinciden');
                    init();

            }
        }
        
        //form.action="sgnup.html";
        //btn.onclick="";
        //btn.focus();
        
      }
      function noCharSP(e){
        form = this.document.getElementById('formula');
        btn = this.document.getElementById('validd');
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
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
        if(key.length<5){
            
            if(cont==0){alert('Inserta valores correctos');}else{}
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
        form = this.document.getElementById('formula');
        btn = this.document.getElementById('validd');
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
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
        if(key.length<8){
          if(cont==0){alert('Inserta valores correctos');}else{}
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
        form = this.document.getElementById('formula');
        btn = this.document.getElementById('validd');
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
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
          if(cont==0){alert('Inserta valores correctos');}else{}
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
        form = this.document.getElementById('formula');
        btn = this.document.getElementById('validd');
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
        var key = e.split("");
        var kul=0;
          //alert(key);
          var com="1234567890";
          var parative = com.split("");
          //alert(parative.length);
          for(j=0;j<key.length;j++){
            for(i=0;i<parative.length;i++){
              if(key[j]==parative[i]){
                //alert(key[j]+' match nmbr '+parative[i]);
                kul++;
                
              }else{
                //alert(key[j]+' no match '+parative[i]);}
              }
          }
        }
        //alert(kul+' longit '+key.length);
        if(key.length<1){
          if(cont==0){alert('Inserta valores correctos');}else{}
          cont++;
          init();
        }else{
          //alert('Todo bien parecer ser');
                  if(kul==key.length){
                      //alert('Todo bien en nmbr '+e);
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
        pass = this.document.getElementById('txtPass');
        nam = this.document.getElementById('txtNam');
        age = this.document.getElementById('txtAge');
        ctry = this.document.getElementById('txtCtry');
        usr = this.document.getElementById('txtUsr');
        if(e=='mail'){
          mail.value="";
        }
        if(e=='pass'){
          pass.value="";
        }
        if(e=='nam'){
            nam.value="";
        }
        if(e=='age'){
            age.value="";
        }
        if(e=='ctry'){
            ctry.value="";
        }
        if(e=='usr'){
            usr.value="";
        }

      }