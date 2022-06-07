[![N|Solid](https://repositorio.itc.edu.co/image/logo_es.png)](https://etitc.edu.co/es/)

# CLASE ELECTIVA .NET 
## API NODEJS & TYPESCRIPT

Una API creada para gestionar libros y autores.
Uso:
**
Rutas:**
{urlHeroku}/api/books
{urlHeroku}/api/author
**
Collection Postman:**
https://www.getpostman.com/collections/eae67c491012949cfd41

## Elaborada Con
- NodeJS 
- MongoDb
- TypeScript
## Características
- CRUD de **Books** y **Author**.
- Despliegue automatico en Heroku

## Preparación 
**
Instale:**

Instale [Visual Studio Code](https://visualstudio.microsoft.com/es/vs/).
Instale [Git](https://git-scm.com/).
Instale [NodeJS](https://nodejs.org/es/).
Instale via npm [TypeScript](https://www.typescriptlang.org/download).

**Cree una cuenta de:**

utilice cuenta de [MongoDb](https://www.mongodb.com/es).
utilice cuenta de [Heroku](https://www.heroku.com/).
utilice cuenta de [GitHub](https://github.com/).

1. Clone el repositorio, desde una terminal.

```sh
git clone https://github.com/manuelrojasm/ApiNodeJS-Ts.git
```

2. En Visual Studio Code abra como proyecto el repositorio descargado.

3. Modifique el archivo "src/config/**constants.ts**" agregandole a la variable **MONGO_DB** el texto de conexión generado por mongo. 

> Nota: asegurese de copiar el texto e incluir la contraseña o no le servira. 
Ejemplo:  
MONGO_DB= 'mongodb+srv://suUsuario:SuContraseña@cluster0.ioxde.mongodb.net/?retryWrites=true&w=majority'

4. Inicie sesion de Heroku en una terminal
```sh 
heroku login
```
5. Configure el remoto de Heroku
```sh 
heroku create
```
6. Ejecute el siguiente comando el cual agregara el contenido. Lo envia al  repositorio, lo compila y luego despliega el API
```sh 
npm deploy
```
6. Abra el servidor desplegado con el comando
```sh
    heroku open
```
7. Use la API por medio de la "Collecion Postman" compartida o con peticiones sencillas.

**¡Si lo puedes imaginar, lo puedes Programar!**
**Si te fue útil deja tu estrella al inicio del repositorio**

[//]: # (Desarrollado por Manuel Rojas y Maura Tamayo)
