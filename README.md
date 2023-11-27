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
Consigna:

Crear una aplicación web utilizando React que permita gestionar una lista de tareas. La aplicación deberá hacer uso de componentes funcionales, el hook useState para el manejo del estado, el hook useEffect para realizar efectos secundarios, y eventos para interactuar con el usuario.

Requerimientos:

**Componentes Funcionales:**
- _Componente de Lista de Tareas (TaskList)_: Este componente deberá mostrar la lista de tareas, recibirá como propiedades la lista de tareas y funciones para gestionar eventos relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.). Cada tarea debe representarse mediante un componente TaskItem.
  
-_Componente de Tarea (TaskItem)_:
Este componente deberá representar individualmente una tarea, mostrará el nombre de la tarea y un botón para completarla, utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado cuando esté completada).

-_Componente de Formulario (TaskForm)_:
Este componente contendrá un formulario para agregar nuevas tareas, utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a la lista principal.

**Estado con useState:**
- _Estado Principal (tasks):_
Utilizar el hook useState en el componente principal para gestionar el estado de la lista de tareas, cada tarea debe ser un objeto con propiedades como id, nombre, y completada.

**Desarrollador Web con React Js**

Efectos con useEffect:
Efecto de Actualización (useEffect en el componente principal): Utilizar useEffect para realizar una acción (por ejemplo, mostrar un mensaje) cuando el estado de la lista de tareas cambie.
Interacción con el Usuario - Eventos:
- Eventos en Componente de Lista (TaskList): Implementar eventos que permitan al usuario interactuar con cada tarea (marcar como completada, eliminar, etc.). Estos eventos deberán modificar el estado principal (tasks).
- Eventos en Componente de Formulario (TaskForm):
Implementar eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista.
Estilo y Diseño:
Aplicar estilos CSS para mejorar la apariencia de los componentes. Puede utilizar bibliotecas como styled-components si lo desea.

Screenshot
________________________________________
Pantalla completa (1200px):
![image](https://github.com/rosslabarca/TodoList_React/assets/100976050/6654a2cd-ac8e-42b4-b304-fcfc908ca7c9)

Responsive pantalla pequeña (768px)
![image](https://github.com/rosslabarca/TodoList_React/assets/100976050/146b4265-fe42-405c-afbe-6b076846e8fe)

Technologies
________________________________________

Lista de tecnologías descargadas y usadas:

NODEjs (https://nodejs.org/en) Version 20.3 

Simple React Snippets (https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) Version 1.2.7 

ES7+ React/Redux/React-Native snippets (https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) Version 4.4.3

Vite (https://vitejs.dev/guide/) configuración en la terminal Go Comand $ npm create vite@latest 

Chakra UI https://chakra-ui.com/ configuración en la terminal Go Comand npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion 

Bootstrap- React: https://react-bootstrap.netlify.app/docs/getting-started/introduction configuración en la terminal Go Comand npm install react-bootstrap bootstrap

Netlify app para hacer el deployed https://app.netlify.com/sites/todolistreactrl/configuration/general

Página: https://todolistreactrl.netlify.app/

Installation
________________________________________
Breve comentario: cada una de las tecnologías fueron instalada de manera fácil desde sus respectivas páginas raíz, descargando la última versión firme (LTS),
En el caso de Nodejs le dí a instalar, y luego siguiente...siguiente y finish. Los snippets fueron a través de VSC en la parte de extensiones. Con respecto a Vite y a Chakras, fue por medio de la terminal de VSC, mediante los comando de configuaración traidos de sus páginas.

Steps
________________________________________
1.	Instalación de las tecnologías usadas.
2.	Agregar los meta datos, Google Fonts, Links de estilos, Favicon, scripts en el index.html.
3.	Crear en la carpeta public la carpeta assets y luego la de imagenes, agregar todos los archivos visuales en ella.
5.	Darle los estilos generales en el index.css.
6.	Crear una carpeta para cada componente donde se incluyen los archivos .jsx y .css, para luego ser renderizados al archivo App.jsx
   6.1 el primer componente elaborado fue el TaskForm, usando el useState para realizar las funciones de manejo de eventos (handleSubmit, handleChange), así poder introducir las tareas.
  	6.2 el segundo componente elaborado fue el TaskItem, usando el useState para realizar las funciones de manejo de eventos (handleComplete, handleDelete), para saber si una tarea fue completada, y el otro para borrarla.
  	6.3 el tercer componente elaborado fue el TaskList, donde a través de la propiedad map. recorre el listado y puede saber si una tarea es completada, o borrada, haciendo una comunicación entre componentes, mediante la importación del componente TaskItem.
  	6.4 el cuarto componente elaborado fue el History, que trae el historial de las tareas, haciendo click en el boton tarea, donde a través del useState, hice la pregunta "¿mostrar tareas?". Luego recorre el listado de tareas, nuevamente con la propiedad map dandole una única identidad (key= id).	
7.	Crear una carpeta para agregar el componente secundario renderizado a main.jsx, llamado Header.jsx.
   Este mismo, para cumplir el requerimiento de estilo, se utilizo la página de google chrome https://diccionarioweb.com/colorzilla-como-saber-colores-de-una-pagina-web/
8.	Subir los archivos a GitHub.
9.	Hacer el deployed en Netlify.  https://todolistreactrl.netlify.app/







