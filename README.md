# Portfolio de David Martínez Barragán

Portfolio profesional bilingüe desarrollado con React, TypeScript y Vite.

## Ejecutar la web

Desde Anaconda Prompt:

```cmd
cd /d "RUTA\portfolio-david-nuevo"
npm install
npm run dev
```

Abre la URL que muestre Vite, normalmente `http://localhost:5173`.

## Datos personales y enlaces

Todos los datos editables están en:

```text
src/content.ts
```

Al comienzo del archivo encontrarás el objeto `contact` con el email, teléfono, LinkedIn, GitHub y CV.

## Añadir el CV

Copia el PDF dentro de `public` con este nombre:

```text
CV_David_Martinez.pdf
```

La ruta ya está configurada como `/CV_David_Martinez.pdf`.

## Añadir certificados

En `src/content.ts`, busca:

```ts
export const certificates
```

Añade cada certificado en español y en inglés. La sección de certificados permanece oculta mientras las listas estén vacías y aparece automáticamente al añadir el primero.

Ejemplo:

```ts
{
  title: 'Microsoft Azure AI Fundamentals',
  issuer: 'Microsoft',
  year: '2026',
  url: 'https://enlace-al-certificado.com'
}
```

## Añadir proyectos o habilidades

En `src/content.ts` puedes ampliar:

- `projects.items`
- `skills.technical`
- `skills.soft`
- `experience.items`
- `education.items`

Recuerda incorporar el contenido tanto en `es` como en `en`.

## Publicar cambios

Antes de publicar:

```cmd
npm run build
```

La carpeta `dist` será la versión optimizada de producción.
