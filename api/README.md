# API de reservas — reservas-farmacia

> **Proyecto de práctica para el workshop de Kiro.** Todos los datos son ficticios y viven en memoria.

## Correr el proyecto

```bash
npm install     # o: pnpm install
npm test        # 3 pruebas pasan y 1 queda pendiente a propósito
npm run lint
npm run dev     # http://localhost:3000
```

Requiere Node.js 20 o superior.

**Si usas pnpm 11:** pnpm bloquea los scripts de instalación de las dependencias que no estén aprobadas y termina con `ERR_PNPM_IGNORED_BUILDS`. El archivo `pnpm-workspace.yaml` ya aprueba `esbuild` (lo usan `tsx` y `vitest`) con `allowBuilds`, así que `pnpm install` funciona sin pasos extra. Con pnpm, los comandos son `pnpm test`, `pnpm lint` y `pnpm dev`.

## Endpoints

| Método | Ruta | Qué hace |
| --- | --- | --- |
| GET | `/salud` | Comprueba que la API responde |
| GET | `/productos/:sku/disponibilidad?local=FY-UIO-01` | Unidades disponibles de un producto, en un local o en todos |
| POST | `/reservas` | Crea una reserva y descuenta el stock. Cuerpo: `{ sku, idLocal, cantidad, cliente: { nombre, email } }` |
| GET | `/reservas/:id` | Consulta una reserva |
| PATCH | `/reservas/:id` | Cambia la cantidad reservada. Cuerpo: `{ cantidad }` |

## Estructura

```
src/
  app.ts              Crea la aplicación Express
  server.ts           Arranca el servidor
  store.ts            Stock y reservas en memoria
  data/catalogo.ts    20 productos y 5 locales ficticios
  routes/             Rutas de productos y reservas
tests/                Pruebas con Vitest y Supertest
```

## Notas para el taller

- `.env` contiene un valor **falso** que se usa en el Lab 3 para probar un guardarraíl. No es una clave real.
- `tests/reservas-patch.test.ts` está marcado como pendiente (`it.skip`) y se activa en los Labs 1 y 5.
