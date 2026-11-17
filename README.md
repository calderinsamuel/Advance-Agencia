# Advance Agencia Creativa

Sitio comercial en español para una agencia de publicidad, impresión y personalización en Montería. Rediseño en azul cobalto, amarillo y tonos claros, con portada ilustrativa propia y fotografías de referencia del proyecto original.

## Abrir en Visual Studio Code

1. Extrae el ZIP y abre la carpeta `advance-agencia` en Visual Studio Code.
2. Necesitas Node.js 20.9 o posterior (se recomienda una versión LTS compatible).
3. Abre Terminal → Nueva terminal y ejecuta:

```bash
npm ci
npm run dev
```

4. Abre `http://localhost:3000` en tu navegador. No abras el archivo TSX directamente.

## Compilar y comprobar

```bash
npm run build
npm run verify
npm start
```

La compilación valida TypeScript y genera las páginas de producción. `verify` comprueba los 15 productos, sus imágenes, las rutas, las secciones y la codificación de mensajes de WhatsApp. No sustituye una prueba interactiva de navegador.

## Qué incluye

- Portada nueva con imagen creada para Advance, identificada como ilustrativa.
- Servicios organizados por necesidades del cliente.
- Catálogo de 15 productos con filtros, buscador tolerante a tildes, navegación de imágenes, créditos y enlace al PDF original.
- Selección de un producto que completa el servicio en la cotización.
- Formulario con validación y aceptación de privacidad. Primero prepara un mensaje; el cliente debe abrir WhatsApp y enviarlo allí. Nunca muestra una confirmación falsa de envío.
- Proceso de trabajo, preguntas frecuentes, contacto, teléfono, correo, Instagram y enlace de ubicación.
- Menú móvil, enlace para saltar al contenido, estados de foco, soporte de movimiento reducido y estilos para pantallas pequeñas.
- Páginas de privacidad y términos conservadas con texto más legible; privacidad explica el flujo actual.
- Sin base de datos, sistema de pagos, recepción automática de mensajes ni analítica añadida.

## Editar contenido

| Qué cambiar | Archivo |
| --- | --- |
| Teléfono, correo, dirección e Instagram | `src/lib/contact.ts` |
| Productos, categorías, imágenes y créditos | `src/data/catalogo.ts` |
| Textos, servicios, preguntas y estructura | `src/app/page.tsx` |
| Colores, tipografía, tamaños y diseño móvil | `src/app/globals.css` |
| Navegación | `src/components/Navbar.tsx` |
| Título, descripción y vista previa social | `src/app/layout.tsx` |
| Imagen principal | `public/images/advance-studio.png` |
| Catálogo descargable original | `public/catalogo.pdf` |

## Publicar

El proyecto conserva Next.js y puede desplegarse en un proveedor compatible con Next.js, como Vercel. Sube el contenido de `advance-agencia` a tu repositorio (sin `node_modules` ni `.next`), importa el repositorio en el proveedor y usa `npm run build` como comando de compilación.

Configura `NEXT_PUBLIC_SITE_URL` con el dominio real, incluyendo `https://`, y vuelve a compilar. Esto permite crear URLs absolutas correctas para la vista previa social. Sin esa variable, el desarrollo local usa la URL local predeterminada de Next.js; no se inventa un dominio de producción.

Ejemplo de configuración local en `.env.local`:

```text
NEXT_PUBLIC_SITE_URL=https://tu-dominio-real.com
```

Antes de publicar, confirma los datos comerciales con el responsable. Se conservaron el teléfono, correo, Instagram y dirección escrita del original. El mapa incrustado original apuntaba a una dirección distinta: se reemplazó por una búsqueda de la dirección escrita, que debe confirmarse. Revisa también las condiciones comerciales y el catálogo PDF original, que no fue rediseñado.

## Imágenes y veracidad

La portada es un concepto generado por IA, no un trabajo real ni un producto ofrecido con especificaciones garantizadas. El catálogo presenta referencias visuales; conserva los créditos externos que estaban en el código. Comprueba las licencias y autorizaciones de las imágenes originales antes de uso comercial. Los testimonios con retratos de banco de imágenes se retiraron al no contar con verificación. No se añadieron cifras, reseñas ni clientes ficticios.

## Limpieza

Se retiraron imágenes que no utilizaba la web, archivos gráficos de ejemplo de Next.js y las dependencias sin uso `framer-motion` y `swiper`. El ZIP no incluye `node_modules`, `.next`, cachés ni archivos internos de asistentes: `npm ci` instala las dependencias exactas del archivo de bloqueo. El catálogo PDF se conserva.

## Validación de esta entrega

Compilación de producción y comprobaciones automatizadas realizadas. La vista previa del entorno no pudo iniciar Next.js porque le añade opciones de servidor incompatibles (`--host` y `--strictPort`). Por ello, la apariencia final y las interacciones en un navegador real quedan pendientes de comprobación local; no se afirma haber realizado esa revisión.
