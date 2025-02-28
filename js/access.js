var mail = this.document.getElementById('txtMail');
      var pass = this.document.getElementById('txtPass');
      var form = this.document.getElementById('formula');
      var btn = this.document.getElementById('validd');
      var cont=0;
      function init(){
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
        form = this.document.getElementById('formula');
        btn = this.document.getElementById('validd');
        mail.value="";
        pass.value="";
        form.action="";
        btn.onclick="valUsr();";
      }
      function valUsr(){
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
        cont=0;
        
        if(mail.value!=''&&pass.value!=''){
          var mm= noCharSP(mail.value);
          var pp= noCharSPass(pass.value);
          //alert(mm+' match valores '+pp);
          if(mm=='mail'&&pp=='pass'){
            alert('Correct log in');
            form.action="/accessV/index.php";
            btn.onclick="";
            btn.focus();}else{
              //alert('Valores no coinciden');
              init();

            }
        }
        
        //form.action="sgnup.html";
        //btn.onclick="";
        //btn.focus();
        
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
      function inputX(e){
        mail = this.document.getElementById('txtMail');
        pass = this.document.getElementById('txtPass');
        if(e=='mail'){
          mail.value="";
        }
        if(e=='pass'){
          pass.value="";
        }
      }