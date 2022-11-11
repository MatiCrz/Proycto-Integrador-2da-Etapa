class Usuario:

    def __init__(self,nombre:str,apellido:str,email,telefono:int,nombreUs,contraseña,rol):
        self.__nombre = nombre
        self.__apellido = apellido
        self.__email = email
        self.__telefono = telefono
        self.__nombreUs = nombreUs
        self.__contraseña = contraseña
        self.__rol = rol

    #Getter
    @property
    def nombre(self):
        return self.__nombre
    
    @property
    def apellido(self):
        return self.__apellido
    
    @property
    def email(self):
        return self.__email

    @property
    def telefono(self):
        return self.__telefono
    
    @property
    def nombreUs(self):
        return self.__nombreUs

    @property
    def rol(self):
        return self.__contraseña
    
    @property
    def contraseña(self):
        return self.__rol

    #Setter - modificacion

    @nombre.setter
    def nombre(self,nombre):
        self.__nombre(nombre)

    @apellido.setter
    def apellido(self,apellido):
        self.__apellido(apellido)

    @


Persona = Usuario("Ramon",123,"jolqkjwel",1234556656,"R21",1234,"Us")
print(Persona.nombre)

    