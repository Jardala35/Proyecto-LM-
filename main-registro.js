function registro(){
    var user, password, email, password2

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Pass").value;
    email = document.getElementById("email").value;
    password2 = document.getElementById("Pass2").value;

    if(user == "Admin"){
        alert("El usuario introducido ya esta en uso.")
    }else if(password != password2){
        alert("Las contraseñas no coinciden")
    }else if(email != ""  && password != ""  && password2 != ""  && user != ""){
        window.location.href = "login.html";
    }else{
        alert("Datos Incorrectos o campos sin rellenar")
    }  
}