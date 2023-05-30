function login(){ 
     var user, password
    user = document.getElementById("usuario").value;    
          password = document.getElementById("contraseña").value;

          
    if(user == "arthur cruz"    &&   password == "admin" ){
          window.location = "index.html";
    }
        
else if(user == "henry brito" && password == "maestro"){
      window.location = "index.html";
}


else{
      alert("usuario o contraseña incorrectos")
}
    
}
