# YAYDOO
## API REST

Esta aplicacion es un CRUD de usuarios para crear, actuliazar, leer y eliminar usuarios.

NOTA:La aplicacion fue creada en el sistema operativo Ubuntu 20.4 por lo tanto las instrucciones seran dadas para este tipo de sistema operativo, de igual manera en otros sistemas operativos debe funcionar igual, solo varian los comandos para abrir o editar

# Instalacion
la aplicacion fue creada utilizando nodeJS Version +16, se recomienda actualizar a esta version para que pueda ser utilizada de forma correcta

## Instalando dependencias y devDependencias
Ir a la ruta yaydoo_examen_backend_JORGE_REYNOSO
```sh 
cd yaydoo_examen_backend_JORGE_REYNOSO
```

Para correr la aplicacion se necesita el archivo .env que es donde almacenamos nuestras variables que no se deben exponer en el programa.
Este archivo no se expondra en git pero aqui agregare los valores para que pueda correr de manera correcta el progama
```sh
touch .env
```

abrir el archivo y agregar la siguiente informacion
```sh
nano .env
```
PORT=3000
DATABASE=mongodb://localhost/yaydoo

USER=yorsh
PASSWORD=cnTqMPoPgc1vrhsB
DATABASE_PRODUCTION=veterinary

NOTA: la base de datos es de produccion para pruebas de uso gratuito, por lo tanto no es posible realizar un cambio en el nombre de la BD de "veterinary"
NOTA 2: esta informacion no se deberia de compartir, unicamente es con fines de prueba para el challenge.

Una vez que hemos creado nuestra variable de entorno, podemos comenzar a instalar nuestras herramientas.

# Tech
- [node.js] - Eventos de I/O para el backend.
- [Express] - Framework que facilita el uso en Node.js.
- [dotenv] - Crea un archivo .env en el directorio root del proyecto. Agrega variables especificas de entorno de la manera NAME=VALUE.
- [mongoose] - Mongoose base de datos no relacional, nos ayuda para hacer querys y utlizar su schema para validar informacion
- [nodemon] - nodemon es una herramienta que nos ayuda a desarrolar de manera mas rapida, realiza restaring de manera automatica una vez que se guarda la informacion. Cuando detecta un cambio en codigo y se guarda, automaticamente se reinicia el programa.

# frontend
// TODO
 el frontend no se ha desarrollado, la manera de realizar las pruebas es mediante postman o insomnia

 # backEnd
 El tech puede instalarse de manera automatica corriendo en la terminal el comando
 ```sh
 npm install
 ```
## correr el programa
utilizando el comando 
```sh
 npm run dev
 ```
nuestra aplicacion funcionara
si se realizo  de manera correcta veremos lo siguiente

```sh
Server running on port 3000
Database is connected
```


# EndPoints
Todos los end points deben comenzar con:
```sh
/api/ + /endpoint

ejemplo:
localhost:3000/api/createUser
```

## /createUser - POST
Creacion de un nuevo usuario. para crear un usuario necesitamos enviar en el body lo siguiente
```sh
{
    "email": "newUser@mail.com",
    "password":"THEPASSWORD",
    "name": "this is my name"

}
```
si el usuario se creó de manera correcta se recibirá una respuesta como la siguiente
```sh
{
    "status": true,
    "message": "The user newUser@mail.com was created correctly"
}
```


## /getAllusers - GET
Muestra toda la base de datos de usuarios creados.

si la peticion se realiza de manera correcta recibimos los siguiente:
```sh
[
    {
        "_id": "618a8c9025717662b7ed7166",
        "name": "yorsh boy",
        "email": "yorsh@mail.com",
        "password": "THEPASSWORD",
        "__v": 0
    },
    {
        "_id": "618a8fae65377657a257452c",
        "name": "juan perez lopez ramirez",
        "email": "newUser@mail.com",
        "password": "THEPASSWORD",
        "__v": 0
    }
]
```


## /getUserByEmail/:email - GET
muestra la informacion del usuario utilizando el email
el email se recibira en el HEADER.
la respuesta sera el objeto del usuario en especifico, si no existe, recibiremos una respuesta que el usuario no existe

## /edit/:id - PUT
este endpoint edita y actualiza la informacion del usuario.
para realizar esta actualizacion es necesario el id del usuario, este id es proporcionado por las bases de datos no relacionales y se envia en el header.
Ejemplo, actualizar el nombre al usuario newUser@mail.com

```sh
localhost:3000/api/edit/618a8fae65377657a257452c

body

{
    "name": "Este es mi nuevo nombre"
}
```
si se realizo de manera correcta recibimos los siguiente como respuesta

```sh
{
    "status": true,
    "message": "Actualizacion correcta"
}
```
podemos realizar una peticion getUserByEmail para validar que se actualizo de manera correcta


## /delete:id - POST
De igual manera que actualizamos, necesitamos el id para poder eliminar un usuario

respuesta si se elimmina de manera correcta
```sh
{
    "status": true, 
    "message":"el usuario fue eliminado de manera correcta"

}


