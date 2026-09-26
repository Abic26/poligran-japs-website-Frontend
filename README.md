# JAPS Electrical Equipment

Sitio web corporativo de **JAPS**, una empresa dedicada a la distribución de equipos y soluciones para redes eléctricas en Colombia. La página presenta la compañía, su catálogo de productos, noticias del sector energético y sus canales de contacto.

## Características

- Página de inicio con información destacada, clientes, productos y noticias.
- Catálogo de productos eléctricos organizado por categorías.
- Vista con información técnica y productos relacionados.
- Sección de noticias y vista de detalle para artículos.
- Página corporativa sobre JAPS.
- Formulario de contacto y acceso directo a WhatsApp.
- Servicios renderizados dinámicamente desde un archivo JSON.
- Noticias favoritas y carrito de compras con persistencia local.
- Formulario de contacto con validaciones y confirmación de envío simulada.
- Navegación entre páginas con Vue Router.
- Diseño adaptable a computadores, tabletas y dispositivos móviles.

> [!NOTE]
> Este proyecto es un prototipo de frontend. El carrito, los favoritos y el formulario funcionan localmente, pero no están conectados a un backend ni a una pasarela de pagos.

## Funcionalidades implementadas

### Servicios dinámicos

Los servicios de JAPS se almacenan en `src/data/servicios.json` y se muestran dinámicamente en la página de inicio mediante `v-for`. Para agregar otro servicio solo es necesario incluir un nuevo objeto con `id`, `titulo`, `descripcion` e `icono` dentro del archivo JSON.

### Noticias favoritas

- Cada noticia tiene un botón con forma de corazón para agregarla o quitarla de favoritos.
- La página de noticias permite filtrar y mostrar solamente las noticias favoritas.
- La selección se conserva en el navegador mediante `localStorage`.

### Carrito de compras

- Los productos pueden agregarse al carrito desde sus tarjetas.
- El encabezado muestra la cantidad total de productos agregados.
- El carrito permite aumentar o disminuir cantidades y eliminar productos.
- Se calcula automáticamente el valor total de la compra.
- El contenido se conserva en `localStorage`, incluso después de recargar la página.
- El botón **Solicitar cotización** dirige al formulario de contacto. No se realizan pagos reales.

### Formulario de contacto

El formulario está disponible en la página de inicio y en la sección de contacto. Incluye validaciones para:

- Nombre de mínimo 3 caracteres.
- Correo electrónico con formato válido.
- Teléfono opcional con formato válido.
- Asunto de mínimo 3 caracteres.
- Mensaje de mínimo 10 caracteres.

Cuando todos los campos son válidos, se limpian los datos y se presenta una confirmación que simula el envío. La información no se envía a ningún servidor.

## Tecnologías

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)

## Requisitos previos

Para ejecutar el proyecto necesitas tener instalados:

- [Node.js](https://nodejs.org/) 20 o superior
- npm, incluido con Node.js

## Instalación

1. Clona el repositorio y entra en la carpeta del proyecto:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd japs-website
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre en el navegador la dirección que muestra Vite, normalmente `http://localhost:5173`.

## Comandos disponibles

| Comando           | Descripción                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor local con recarga automática.                        |
| `npm run build`   | Genera la versión de producción en la carpeta `dist/`.                  |
| `npm run preview` | Sirve localmente la versión compilada.                                  |
| `npm run format`  | Formatea el código fuente y los archivos de configuración con Prettier. |

## Rutas

| Ruta                       | Contenido                       |
| -------------------------- | ------------------------------- |
| `/`                        | Página de inicio.               |
| `/productos`               | Catálogo de productos.          |
| `/productos/cortacircuito` | Detalle de un producto.         |
| `/noticias`                | Listado de noticias.            |
| `/noticias/energia-solar`  | Detalle de una noticia.         |
| `/nosotros`                | Información sobre la empresa.   |
| `/contacto`                | Datos y formulario de contacto. |

## Estructura del proyecto

```text
japs-website/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── assets/             # Imágenes y recursos locales
│   ├── components/         # Componentes reutilizables
│   ├── composables/         # Estado compartido del carrito y favoritos
│   ├── data/                # Información cargada desde archivos JSON
│   ├── router/             # Configuración de rutas
│   ├── views/              # Vistas principales del sitio
│   ├── App.vue             # Estructura global de la aplicación
│   ├── main.js             # Punto de entrada
│   └── style.css           # Estilos globales y tema visual
├── index.html
├── package.json
└── vite.config.js
```

## Compilación para producción

Genera los archivos optimizados con:

```bash
npm run build
```

El resultado quedará disponible en `dist/`. Como el proyecto utiliza el modo historial de Vue Router, el servidor de producción debe redirigir las rutas desconocidas hacia `index.html` para permitir el acceso directo a las páginas internas.

## Recursos externos

Algunas imágenes de productos y noticias se cargan desde servicios externos. Por este motivo, se necesita conexión a internet para visualizar todo el contenido gráfico durante el desarrollo.
