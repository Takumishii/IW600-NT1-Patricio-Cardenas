# eval1vue
eval 1 ing web

# Mercado Ñuble digital

## Estudiante
Patricio Cárdenas

## Descripción
Prototipo SPA desarrollado en Vue 3 con tematica de una plataforma de fomento para pequeños productores locales, visualizando productos.

## Parte A – Estructura y navegación
La estructura del proyecto está en la carpeta `src/`, con componentes reutilizables en `src/components/` (Navbar.vue) y las 4 vistas principales en `src/views/` (`Inicio.vue`, `Productos.vue`, `Productores.vue` y `Contacto.vue`). 

La navegación se implementó con `Vue Router`, configurando el historial (`createWebHistory`) y las rutas en `src/router/index.js`. Se utilizó la etiqueta `<router-link>` en la barra de navegación para permitir la transición sin recargar la página.

Tambien se implementó un Footer, el contenido de la web es texto de relleno, por cambiar

## Parte B – Componentes y Props

Se creó el componente reutilizable `CardProducto.vue` en la carpeta `src/components/`. Este componente recibe un objeto `producto` a través de `props`, el cual contiene las propiedades: `nombre`, `categoria`, `productor`, `comuna` y `precio`. 

La información es enviada desde el componente padre `Productos.vue`, donde se encuentra almacenada la estructura de datos con 6 productos, iterando mediante `v-for` para pasar cada elemento individual hacia la prop del componente hijo.

## Parte C – Listas y condicionales
Se utiliza la lista `productos` almacenada en el estado de `Productos.vue`, la cual se recorre dinámicamente mediante la directiva `v-for`. 

Se implementó una funcionalidad condicional basada en la disponibilidad de los productos (`disponible: true/false`). Mediante una propiedad computada (`filtrados`) y un checkbox vinculado con `v-model`, la lista se puede filtrar para ver solo los disponibles. Se utilizan las `v-if` y `v-else` para mostrar las tarjetas o un mensaje cuando no existan coincidencias.

## Parte D – Comunicación mediante Emit
* **Acción que realiza el usuario:** El usuario presiona el botón "Me interesa" ubicado en la tarjeta de un producto disponible.
* **Componente que genera el evento:** El componente hijo `CardProducto.vue`.
* **Componente que lo recibe:** El componente padre `Productos.vue`.
* **Qué ocurre después de recibirlo:** El componente padre activa `seleccionado` con la información enviada por el hijo y despliega una alerta (`alerta-interes`) informando al usuario, el interés por el producto y que puedes contactar al productor.

## Parte E – Formulario y validación
* **Campos implementados:** Nombre completo, Correo electrónico, Teléfono, Comuna y Mensaje, todos vinculados bidireccionalmente al estado mediante `v-model`.
* **Validaciones realizadas:** Al intentar enviar el formulario mediante el evento `@submit.prevent`, se verifica que ninguno de los campos esté vacío.
* **Respuesta de la aplicación:**
  * **Incorrecta/Faltante:** Muestra un cuadro de advertencia en rojo
  * **Correcta:** Oculta el formulario y muestra un mensaje de éxito junto con todos los datos ingresados en el formulario.

## Parte F: Decisiones de Diseño e Integración Final

### Decisiones de Diseño UI/UX

* **Layout y Grilla Responsiva:** Se implementó una estructura basada en CSS Grid (`grid-template-columns: repeat(3, 1fr)`) en el catálogo para romper con la lista vertical plana. Esto permite visualizar múltiples productos a la vez de forma ordenada, adaptándose a pantallas móviles, tablets y escritorio.
* **Paleta de Colores Temática:** Se seleccionó una gama de tonos verdes (`#1b5e20`, `#2e7d32`, `#e8f5e9`) y de contraste neutro para evocar la identidad agrícola y local de la Región de Ñuble, manteniendo un aspecto profesional y limpio.
* **Feedback Visual e Interactividad:** 
  * Las tarjetas de productos (`CardProducto.vue`) adaptan su opacidad y cambian el estado del botón a "Sin Stock" cuando el producto no está disponible.
  * Se integró un banner/alerta de confirmación inmediata cuando el usuario presiona "Me interesa".
* **Diseño del Inicio (Hero Section):** Se estructuró la vista principal con accesos directos claros a las secciones clave (Catálogo y Productores), además de presentar las métricas y propuestas de valor del proyecto.

## Tecnologías Utilizadas

Para el desarrollo de la aplicación **Mercado Ñuble Digital**, se utilizaron las siguientes herramientas y tecnologías:

### Frameworks y Librerías Core
* **[Vue.js 3](https://vuejs.org/):** Framework progresivo de JavaScript utilizado para la construcción de la interfaz de usuario mediante componentes reactivos y modulares (SFC - Single File Components).
* **[Vue Router 4](https://router.vuejs.org/):** Enrutador oficial de Vue.js para la gestión de la navegación entre vistas en una SPA (Single Page Application).
* **[Vite](https://vitejs.dev/):** Herramienta de construcción (build tool) rápida para el entorno de desarrollo y empaquetado del proyecto.

### Lenguajes y Estilos
* **HTML5:** Estructura semántica de la aplicación.
* **CSS3 (Scoped Styles):** Estilos personalizados utilizando flexbox, CSS Grid responsivo, variables de color y encapsulamiento scoped por componente.
* **JavaScript (ES6+):** Lógica del cliente, propiedades computadas, manejo de eventos emitidos (`$emit`) y reactividad.

### Control de Versiones y Despliegue
* **Git:** Control de versiones distribuido para el registro de commits y ramas del proyecto.
* **GitHub / GitLab:** Plataforma de alojamiento de código para el repositorio.
* **Node.js & npm:** Entorno de ejecución y gestor de paquetes para la instalación de dependencias.

## Ejecución del Proyecto

Para ejecutar la aplicación localmente en tu equipo, sigue estos pasos:

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16+ recomendada).

### Pasos de Instalación

# 1. Clonar el repositorio
git clone https://github.com/Takumishii/eval1vue.git

# 2. Entrar a la carpeta del proyecto
cd eval1vue

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Abrir en el navegador la dirección indicada en la terminal (por ejemplo: http://localhost:5173/)

## Reflexión final

### ¿Qué parte del desarrollo presentó mayor dificultad y cómo logró resolverla?

La mayor dificultad durante el desarrollo se presentó en la **Parte D: Interacción y Comunicación entre Componentes**, específicamente al intentar comunicar el evento de selección desde el componente hijo (`CardProducto.vue`) hacia la vista padre (`Productos.vue`).

En un principio, al hacer clic en el botón de interacción dentro de la tarjeta, la información no llegaba correctamente al padre o el cambio de estado no se reflejaba de manera inmediata en la interfaz gráfica. 

Para resolver este problema, se aplicaron los siguientes pasos técnicos:
# 1. Se definió explícitamente la propiedad 'emits: ['interes']' en la configuración del componente hijo para declarar la emisión del evento personalizado.
# 2. Se ajustó el método handler dentro del hijo para emitir '$emit('interes', this.producto)', enviando el objeto del producto como argumento.
# 3. En el componente padre se escuchó el evento mediante la directiva '@interes="registrarInteres"' vinculando una función que actualiza la propiedad reactiva 'seleccionado'.
# 4. Finalmente, se utilizó la renderización condicional ('v-if="seleccionado"') en el padre para desplegar dinámicamente un banner de confirmación visible en pantalla solo cuando existan datos recibidos desde el hijo.

Además de esto que fue lo que más tiempo demore, fue el compaginar el tiempo con las otras evaluaciones que habían a la vez de la realización de esta :(