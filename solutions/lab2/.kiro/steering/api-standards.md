---
inclusion: fileMatch
fileMatchPattern: ["src/routes/**/*.ts"]
---
# Estándares de API

- Errores siempre como `{ error: { code, message } }` con el status HTTP correcto: 400 validación, 404 no encontrado, 409 conflicto de estado o stock.
  - Ejemplo: `res.status(400).json({ error: { code: 'CANTIDAD_INVALIDA', message: 'La cantidad debe ser un entero mayor o igual a 1' } })`
- Validar el cuerpo y los parámetros con **zod** antes de tocar el store. Nunca usar `Number()` sin validar el resultado.
- Nunca dejar stock negativo: validar antes de llamar a `ajustarStock`.
- Cada endpoint nuevo lleva al menos una prueba de caso feliz y una de error.
- Ruta de referencia para el estilo de los handlers: #[[file:src/routes/reservas.ts]]

**Por qué:** hoy la API mezcla `{ message }`, `{ error: 'texto' }` y respuestas en texto plano, y el cliente móvil no puede mostrar errores de forma consistente.
