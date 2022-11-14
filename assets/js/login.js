// login --> terminado
function login() {

    // Toma los valores enviados desde el html y los guarda en variables
    var reg = N_usuario_login.value
    var pas = contraseña_login.value

    // Mensajes
    let rep = document.getElementById("respuestaLogin");

    // login valido - usuarios predeterminados
    if(usuarios.includes(reg)){

        if(reg == "Agus25"){
            if(Agus25.contra == pas){
                rep.append("Bienvenida Agus25")
                window.location.href = "agus25.html"
            }
            else if(pas == ""){
                rep.append("Ingresa una contraseña")
            }
            else{
                rep.append("Contraseña invalida")
            }
        }
        

        if(reg == "Raul36"){
            if(Raul36.contra == pas){
                rep.append("Bienvenida Raul36")
                window.location.href = "Raul36.html"
            }
            else if(pas == ""){
                rep.append("Ingresa una contraseña")
            }
            else{
                rep.append("Contraseña invalida")
            }
        }

        if(reg == "Bri58"){
            if(Bri58.contra == pas){
                rep.append("Bienvenida Bri58")
                window.location.href = "Bri58.html"
            }
            else if(pas == ""){
                rep.append("Ingresa una contraseña")
            }
            else{
                rep.append("Contraseña invalida")
            }
        }
        if(reg == "Manu99"){
            if(Manu99.contra == pas){
                rep.append("Bienvenida Manu99")
                window.location.href = "Manu99.html"
            }
            else if(pas == ""){
                rep.append("Ingresa una contraseña")
            }
            else{
                rep.append("Contraseña invalida")
            }
        }

    }

    // errores en los campos
    else{

        if(reg == ""){
            alert("campo usuario vacio")
        }
        
        if(pas == ""){
            alert("campo contraseña vacio")
        }
    }

}