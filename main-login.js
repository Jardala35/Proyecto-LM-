function login(){

  var loginUsername = document.getElementById("Usuario").value;
  var loginPassword = document.getElementById("Pass").value;
  
  // Obtener los datos almacenados del registro
  var storedUsername = localStorage.getItem("Usuario");
  var storedPassword = localStorage.getItem("Pass");
  
  // Verificar si los datos coinciden
  if (loginUsername === storedUsername && loginPassword === storedPassword) {
    window.location.href = "index.html";
    // Aquí puedes redirigir al usuario a otra página o realizar otras acciones después del inicio de sesión exitoso.
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
   
  }
  document.getElementById("formu").reset();
}

