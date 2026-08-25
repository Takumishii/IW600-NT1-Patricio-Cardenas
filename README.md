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