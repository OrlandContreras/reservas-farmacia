---
name: pr-review
description: Revisa cambios de la API de reservas en seguridad, validación, manejo de stock y cobertura de pruebas. Úsalo al revisar PRs, antes de hacer commit o cuando pidan revisar mis cambios.
---
# Revisión de cambios — API de reservas

Revisa el diff contra la rama principal (`git diff main...HEAD`, o `git diff` si no hay rama) y reporta cada hallazgo con archivo, línea y severidad (alta, media, baja).

## Checklist

1. **Secretos:** ninguna clave, token ni contenido de `.env` en el código o en las pruebas.
2. **Validación:** todo dato de entrada se valida con zod antes de usarse; no hay `Number()` sin validar.
3. **Stock:** ninguna ruta puede dejar stock negativo ni modificarlo sin pasar por `src/store.ts`.
4. **Errores:** todas las respuestas de error usan `{ error: { code, message } }`.
5. **Pruebas:** cada endpoint nuevo o modificado tiene caso feliz y caso de error.
6. **Datos personales:** no se registran nombre ni email del cliente en logs.

## Formato de salida

| Severidad | Archivo:línea | Hallazgo | Sugerencia |
| --- | --- | --- | --- |

Termina con un veredicto: **Aprobar**, **Aprobar con cambios** o **Rechazar**.
