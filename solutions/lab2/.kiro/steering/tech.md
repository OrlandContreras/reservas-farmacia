---
inclusion: always
---
# Tecnología

- Node.js 20+, TypeScript en modo `strict`, módulos ES (`"type": "module"`, imports con extensión `.js`).
- Express 4 para la API. Validación de entradas con **zod**.
- Pruebas con **Vitest** y **Supertest**; cada prueba llama a `reiniciarStore()` en `beforeEach`.
- ESLint 9 con `typescript-eslint`. `npm run lint` debe quedar sin errores.
- Sin base de datos: el estado vive en `src/store.ts`. No agregar dependencias nuevas sin justificarlo.
