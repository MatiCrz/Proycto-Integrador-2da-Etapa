let usuarios = ["Agus25"]

var Agus25 = {'nombre':"Agustina", 'apellido':"Reyes", 'edad':"25",'pais':"Peru",'lenguaje':"Python"}

let AntonDragon = {'nombre':"Antonio", 'edad':"25",'pais':"Peru",'lenguaje':"Python"}


if("Agus25" in usuarios){
    
    console.log(Agus25)
}

window.onload = function(){
    
    let usuarios = ["Agus25"]

    var Agus25 = {'nombre':"Agustina", 'apellido':"Reyes", 'edad':"25",'pais':"Peru",'lenguaje':"Python"}

    var user = document.getElementById("demo")

    user.append(Agus25.nombre,Agus25.apellido)
}