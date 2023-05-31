function login(){ 
     var user, password
    user = document.getElementById("usuario").value;    
          password = document.getElementById("contraseña").value;

          
    if(user == "arthur cruz"    &&   password == "admin" ){
          window.location = "inicio.html";
    }
        
else if(user == "henry brito" && password == "maestro"){
      window.location = "inicio.html";
}


else{
      alert("usuario o contraseña incorrectos")
}
    
}
