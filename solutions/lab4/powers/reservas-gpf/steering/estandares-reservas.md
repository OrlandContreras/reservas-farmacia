# Estándares de la API de reservas

- Errores como `{ error: { code, message } }`: 400 validación, 404 no encontrado, 409 conflicto de stock.
- Validar cuerpo y parámetros con zod antes de llamar al store.
- El stock solo se modifica a través de `src/store.ts` y nunca queda negativo.
- Cada endpoint nuevo tiene una prueba del caso feliz y una del caso de error.
