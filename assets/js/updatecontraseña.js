function actualizaContraseña(){

    alert("Intentar con 123")
    
    if (true) {
        var old_pass = prompt("Ingresa tu contrasea antigua", "123")

        if(old_pass == "123"){
            var confrimacion_pass = prompt("Ingresa una nueva contraseña",)

            if(confrimacion_pass !== "123"){
                alert("Cuenta actualizada")
            }
            else{
                alert("Contraseña antigua! Operación cancelada ")
            }

        }

        else{
            alert("Campo Vacio! Operación cancelada")
        }

    }
    else {
        alert("Operación cancelada");
    }

}