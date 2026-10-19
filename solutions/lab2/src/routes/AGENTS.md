# Instrucciones para agentes en src/routes

Reto L300 del Lab 2: Kiro descubre este archivo en la subcarpeta y lo carga como steering.

- Los handlers no acceden a estructuras internas: usan solo las funciones exportadas por `src/store.ts`.
- Cada router se registra en `src/app.ts` con un prefijo en plural (`/reservas`, `/locales`).
- Mantén los handlers cortos: si la lógica supera unas 20 líneas, muévela a `src/services/`.
