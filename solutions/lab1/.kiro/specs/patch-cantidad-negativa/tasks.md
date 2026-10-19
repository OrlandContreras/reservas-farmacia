# Implementation Plan — Bugfix de cantidades negativas

- [ ] 1. Activar la prueba de regresión
  - Quitar `.skip` en `tests/reservas-patch.test.ts` y confirmar que falla
- [ ] 2. Validar `cantidad` en `PATCH /reservas/:id`
  - Rechazar con 400 todo lo que no sea un entero mayor o igual a 1, antes de tocar el stock
  - Rechazar con 409 si la reserva no está `activa`
- [ ] 3. Pruebas de lo que no debe cambiar
  - Aumentar y reducir la cantidad con stock suficiente
  - Reserva inexistente → 404
- [ ] 4. Verificación: `npm test` y `npm run lint` sin errores
