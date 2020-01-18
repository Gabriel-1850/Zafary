function login_s(){

  if($("#txtcorreo").val()=="ejemplo@gmail.com" && $("#txtcontrasena").val()=="123456"){
    
	window.location.href = "../Home/index.html";
    
  }
    else
        {
    
         $("#error").html("Nombre de usuario y/o contraseña incorrectos")
		windows.reload(".\Zpotify\index.html")


        }
}
