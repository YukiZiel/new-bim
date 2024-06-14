## DESPLIEGUE DEL ANGULAR

## Versión del angular

Este proyecto fue generado con  [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.6.


## Requisitos

Tener Node.js instalado. Si no lo tienes puedes descargarlo desde `nodejs.org`.

Tener `Angular CLI` instalado. Si no lo tienes ejecuta `npm install -g @angular/cli`.

Ejecuta `npm install` para instalar todas las dependencias necesarias definidas en `package.json`.


## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. 
La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.


## Compilar la aplicación Angular para producción

Ejecuta `ng build` para compilar la aplicación Angular para producción. Este comando generará una carpeta `dist/` en el directorio raíz del proyecto.



## DESPLIEGUE DEL PHP

## Requisitos

Asegúrate de tener PHP instalado en tu servidor. Puedes descargar la última versión de PHP desde `php.net`.
Asegúrate de tener un servidor web configurado para ejecutar PHP, como `Xampp`. Si no lo tienes instalado puedes descargarlo en `apachefriends.org`.

## Iniciar XAMPP y Arrancar Servicios

Abre `XAMPP` desde el menú de inicio (en Windows) o desde la carpeta de aplicaciones (en macOS).
Inicia los servicios de `Apache` y `MySQL` haciendo clic en los botones "Start" (o "Iniciar") junto a ellos.

## Directorio de Documentos Raíz

Coloca la carpeta `php` dentro del directorio de documentos raíz de `XAMPP`, que típicamente es `htdocs`. Este es el directorio donde `Apache` servirá los archivos web.
Ejemplo de rutas: 
    -En Windows: C:\xampp\htdocs\php
    -En macOS: /Applications/XAMPP/htdocs/php

## Acceder a tu Aplicación

Abre el navegador web y navega a `http://localhost/php` para acceder a la aplicación PHP alojada en `XAMPP`.
Cambia las rutas `https://new-bim.000webhostapp.com/php/register.php` que hay dentro de la aplicación `Angular` por las tuyas.

Siguiendo estos pasos, deberías poder configurar y ejecutar tu aplicación PHP localmente utilizando XAMPP.


## DESPLEGAR LA APLICACIÓN

Una vez que tengas configurado el php y cambiado las rutas, ejecuta `ng serve` para desplegar la aplicación en local.