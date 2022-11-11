
// login
function login() {

    var reg = registro.value
    var pas = contraseña.value

    var rep = document.getElementById("respuesta");

    if(usuarios.includes(reg)){
        //alert("Usuario registrado")
        if(Agus25.contra == pas){
            rep.append("Bienvenida Agus25")
            window.location.href = "agus25.html"
        }
        else if(pas == ""){
            rep.append("ingresa una contraseña")
        }
        else{
            rep.append("contraseña incorrecta")
        }
    }
    else{
        
        rep.append("Usuario no registrado")
    }
}

//Registro
