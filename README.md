# Portfolio de David Martínez Barragán

Portfolio profesional bilingüe desarrollado con React, TypeScript y Vite.

## Chat profesional integrado

El portfolio incluye el componente `src/ChatWidget.tsx` en la sección **Asistente**. No sustituye el diseño del portfolio ni muestra la página independiente del agente: es únicamente una tarjeta de conversación integrada en el layout existente.

En desarrollo, Vite redirige `/agent-api` al Worker público para evitar problemas de CORS. También se puede apuntar temporalmente a un Worker local mediante `VITE_AGENT_API_URL`. En producción el componente utiliza directamente:

```text
https://agente-profesional-david.agentdavidmartinez.workers.dev
```

Antes de publicar el portfolio hay que desplegar la versión del Worker que permite los orígenes del portfolio (`portfolio-david-martinez.vercel.app`, `davidovi55.github.io` y localhost). Esa modificación está en la carpeta local `agente-david-cloudflare`, en la versión 5.0 actualizada.

## Analítica y privacidad

- Vercel Web Analytics mide las visitas generales del portfolio.
- El Worker registra en Cloudflare Analytics Engine únicamente eventos agregados del asistente: apertura, selección de modo/rol, reinicio, respuestas correctas y errores.
- No se envían a Analytics Engine las preguntas, respuestas, emails, teléfonos ni el historial de conversación.
- La analítica es opcional y nunca bloquea el uso del portfolio ni del chat.

Para probar el frontend con un Worker local:

```cmd
set VITE_AGENT_API_URL=http://127.0.0.1:8787
npm run dev
```

## Ejecutar la web

Desde Anaconda Prompt:

```cmd
cd /d "RUTA\portfolio-david-nuevo"
npm install
npm run dev
```

Abre la URL que muestre Vite, normalmente `http://localhost:5173`.

Prueba el asistente desde la sección **Asistente**. Comprueba que el indicador aparece como disponible, que una pregunta devuelve respuesta con listas y enlaces correctamente formateados, que funcionan los selectores de modo/rol y que el botón «Nueva conversación» borra el historial. Si el indicador aparece no disponible, revisa primero que el Worker tenga configurada la clave de Gemini.

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
