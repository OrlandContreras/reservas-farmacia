# Implementation Plan — Reservas que expiran a las 24 horas

> Solución de referencia del Lab 1. Las tareas 1 y 2 no dependen entre sí: Kiro puede ejecutarlas en la misma ola.

- [ ] 1. Extender el modelo de reserva
  - Agregar los estados `lista` y `vencida` y los campos `listaEn`, `venceEn` y `vencidaEn` en `src/store.ts`
  - _Requirements: 1.1, 1.4, 2.2_

- [ ] 2. Registrar avisos al cliente
  - Crear `src/services/avisos.ts` con almacenamiento en memoria y una función para listarlos en pruebas
  - _Requirements: 2.2_

- [ ] 3. Marcar una reserva como lista
  - Crear `POST /reservas/:id/lista`, calcular `venceEn` (24 h, o cierre del día para cadena de frío) y registrar el aviso
  - Pruebas con Supertest
  - _Requirements: 2.2, 4.1_

- [ ] 4. Vencer reservas y liberar stock
  - Crear `src/services/vencimiento.ts` con `vencerReservas(ahora)`
  - Programarlo cada minuto en `src/server.ts`
  - Pruebas unitarias con fechas inyectadas, incluido el caso de reserva retirada
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 5. Listar reservas vencidas por local
  - Crear `GET /locales/:id/reservas-vencidas` con filtros `desde` y `hasta`
  - Pruebas de orden, filtro y error 404
  - _Requirements: 3.1, 3.2, 3.3_

- [ ] 6. Verificación final
  - Correr `npm test` y `npm run lint` sin errores
