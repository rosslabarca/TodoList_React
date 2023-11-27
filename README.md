# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
•	@vitejs/plugin-react uses Babel for Fast Refresh
•	@vitejs/plugin-react-swc uses SWC for Fast Refresh
Table of Contents
1.	[Información General]
2.	Technologies
3.	Installation
4.	Collaboration
5.	FAQs
   
General Info
________________________________________
Actividad de la clase #5 de curso básico de React (Argentina Programa, dictado de UTN), la cual solicita: Integrar Chakra UI con useState en React para desarrollar un contador interactivo con diseño responsive.

Instrucciones:
1.-Instalación de Chakra UI:
Asegúrate de tener Chakra UI instalado en tu proyecto de React. Puedes seguir las instrucciones de instalación en la documentación oficial de Chakra UI. Creación del Componente:
Crea un nuevo componente funcional en React llamado ContadorResponsive. Utiliza useState para mantener un estado interno que representará el contador. 2.-Integración con Chakra UI:
Utiliza los componentes proporcionados por Chakra UI para diseñar el contador. Asegúrate de que el diseño inicial sea atractivo y funcional en dispositivos de pantalla grande. 3.-Diseño Responsive:
Ajusta el diseño del contador para que sea responsive en dispositivos de pantalla más pequeña. Utiliza las utilidades de diseño responsivo de Chakra UI, como Flex, Grid, o Stack, para organizar los elementos de manera eficiente en pantallas más pequeñas. 4.-Media Queries Opcionales:
Opcionalmente, puedes utilizar media queries en CSS para realizar ajustes finos en el diseño responsive, si lo consideras necesario.

Screenshot
________________________________________

![image](https://github.com/rosslabarca/Contador_React/assets/100976050/2b3bcdef-2e12-4d88-8f2f-06d53140d27f)


Technologies
________________________________________

Lista de tecnologías descargadas y usadas:

NODEjs (https://nodejs.org/en) Version 20.3 
Simple React Snippets (https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) Version 1.2.7 
ES7+ React/Redux/React-Native snippets (https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) Version 4.4.3
Vite (https://vitejs.dev/guide/) configuración en la terminal Go Comand $ npm create vite@latest 
Chakra UI https://chakra-ui.com/ configuración en la terminal Go Comand npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion 
Netlify app para hacer el deployed https://app.netlify.com/sites/contadorreactrl/overview
Página: https://contadorreactrl.netlify.app/

Installation
________________________________________
Breve comentario: cada una de las tecnologías fueron instalada de manera fácil desde sus respectivas páginas raíz, descargando la última versión firme (LTS),
En el caso de Nodejs le dí a instalar, y luego siguiente...siguiente y finish. Los snippets fueron a través de VSC en la parte de extensiones. Con respecto a Vite y a Chakras, fue por medio de la terminal de VSC, mediante los comando de configuaración traidos de sus páginas.

Steps
________________________________________
1.	Instalación de las tecnologías usadas.
2.	Agregar los meta datos, Google Fonts, Favicon, scripts en el index.html.
3.	Crear en la carpeta public la carpeta assets y luego la de imagenes, agregar todos los archivos visuales en ella.
4.	Darle los estilos generales en el index.css.
5.	Crear una carpeta para agregar el componente princial renderizado a app.jsx, llamado Contador.jsx.
6.	Crear 2 carpetas para agregar los componentes secundarios (respectivamente) renderizado a main.jsx, llamados Header.jsx, y Footer.jsx.
7.	Subir los archivos a GitHub.
8.	Hacer el deployed en Netlify.  https://contadorreactrl.netlify.app/







