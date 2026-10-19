---
inclusion: always
---
# Estructura

- `src/routes/`: un archivo por recurso (`productos.ts`, `reservas.ts`); cada uno exporta un `Router`.
- `src/data/`: catálogo y datos de partida ficticios.
- `src/store.ts`: único lugar que lee o modifica stock y reservas.
- `src/services/`: lógica que no es HTTP (por ejemplo, vencimiento de reservas).
- `tests/`: un archivo `*.test.ts` por recurso o servicio.
- Nombres en español para el dominio (`reserva`, `local`, `stock`) y en inglés solo para conceptos técnicos de librerías.
