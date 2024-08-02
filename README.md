# Digital ID Manager

Digital ID Manager es una aplicación para gestionar identidades digitales, que permite a los usuarios registrarse, iniciar sesión y ver su perfil. La aplicación interactúa con una API de backend para la autenticación y gestión del perfil del usuario. También incluye una funcionalidad de búsqueda en la API de GitHub para encontrar proyectos.

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración del Backend](#configuración-del-backend)
- [Configuración del Frontend](#configuración-del-frontend)
- [Uso](#uso)
- [Pruebas](#pruebas)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Descripción del Proyecto

La aplicación Digital ID Manager permite a los usuarios:

1. Registrarse con una foto de perfil, nombre, correo electrónico y contraseña.
2. Iniciar sesión y obtener un token JWT para autenticación.
3. Ver su perfil con la información de nombre y correo electrónico.
4. Proteger la página de perfil para que solo usuarios autenticados puedan acceder.
5. Implementar un buscador de proyectos en GitHub después de iniciar sesión.

## Requisitos

- Node.js
- MongoDB
- npm o yarn

## Instalación

### Clonación del Repositorio

Primero, clona el repositorio:

git clone https://github.com/mataguir/backend-digital-id-manager.git
cd backend-digital-id-manager

### Configuración del Backend
Instala las dependencias:

    npm install

Crea un archivo .env en la carpeta del backend con las siguientes variables:
DATABASE_URL=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret_key
PORT=5000

Inicia el servidor del backend:

    npm run dev

### Configuración del Frontend

Clona el repositorio:

git clone https://github.com/mataguir/digital-id-manager.git
cd digital-id-manager

Instala las dependencias:

    npm install

Inicia la aplicación React:

npm start


## Uso
En la home puedo loguearme o registrarme si aún no tengo usuario

### Formato Registrar un Usuario:

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

### Formato Iniciar Sesión:

{
  "email": "john.doe@example.com",
  "password": "password123"
}

### Perfil

Una vez logueado veo mi perfil.


## Pruebas

### Frontend

Para ejecutar las pruebas:

npm test

### Backend

Para ejecutar las pruebas:

npm test

## Tecnologías Utilizadas
Frontend: React, Redux Toolkit, React Router, 
Backend: Node.js, Express, MongoDB, Mongoose, JWT
Testing: Jest