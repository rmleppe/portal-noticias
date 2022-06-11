# Portal de noticias construido con nestjs, React, TypeScript, mongodb y auth0


Simple aplicación de portal de noticias contruido bajo nestjs, React, TypeScript y mongodb

## Especificaciones del proyecto

Este proyecto se divide en dos secciones (api backend construido con Nestjs) y (frontend construido con React).

## Pasos para la instalación

Instalar Typescript
```bash
npm install -g typescript
```

## Clonar el repo
```bash
git clone https://github.com/rmleppe/portal-noticias.git
```

## Dirigirse a directorio del proyecto
```bash
cd portal-noticias
```

# Backend
## avanzar a la carpeta de backend
```
cd blog-backend
```
## Instalar dependencias
```
npm install
```
## Crear archivo .env en la raiz y pegar lo siguiente
```
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_AUDIENCE=YOUR_AUTH0_AUDIENCE
```
Asegurarse de sacar bien los datos desde el dashboard de Auth0.

## Asegurarse de tener Mongodb en ejecución

## Ejecutar la aplicación
```
npm run start:dev
```
Esto ejecutará el backend en el puerto 5000, para asi evitar conflictos con el frontend, ya que el puerto por defecto de react es el 3000.

# Frontend

Abrir otro terminal y navegar hasta la raiz del frontend

## Dependencias del frontend
```
cd blog-frontend
npm install 
npm install --global yarn
```
Ejecutar la app de frontend
```
yarn start
```
## Crear el archivo .env incluyendo las credenciales de Auth0.
```
REACT_APP_AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
REACT_APP_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
REACT_APP_AUTH0_AUDIENCE=YOUR_AUTH0_AUDIENCE
REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000
REACT_APP_BASEURL=http://localhost:3000
```
Reemplazar con los correspondientes datos

## Testear la aplicación
Finalmente abra el navegador y vea la aplicación en http://localhost:3000


