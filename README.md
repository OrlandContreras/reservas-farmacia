# reservas-farmacia — Workshop de Kiro

> **Proyecto de práctica para el workshop de Kiro con Corporación GPF.** Todos los datos, productos, locales y políticas son ficticios.

El caso: el cliente reserva un producto en la app y lo retira en el local que elige. Hoy las reservas no vencen y el stock queda bloqueado. En el taller construimos la mejora con Kiro.

## Qué abre cada ruta

| Ruta | Abre en Kiro IDE | Para qué |
| --- | --- | --- |
| Constructores | `reservas-farmacia/api` | API en TypeScript con pruebas |
| Negocio | `reservas-farmacia` (la raíz) | Documentos de `negocio/` y specs |

## Contenido

```
api/          API de reservas (Express + TypeScript, Vitest, ESLint)
negocio/      Necesidad de negocio, políticas de retiro, glosario y FAQ de clientes
solutions/    Soluciones de referencia por laboratorio
```

## Preparación (Ruta Constructores)

```bash
cd api
npm install  # o pnpm install (pnpm 11 ya queda configurado en api/pnpm-workspace.yaml)
npm test     # 3 pruebas pasan y 1 queda pendiente a propósito
npm run lint
```

Requiere Node.js 20+, Git y, para el Lab 4, `uv` (servidores MCP con `uvx`).

## Ramas

| Rama | Para qué |
| --- | --- |
| `main` | Punto de partida de todos los laboratorios |
| `lab5-inicio` | Reto L300 del Lab 5: el error de `PATCH /reservas/:id` sigue presente y su prueba está activa, así que `npm test` falla |

## Laboratorios

| Lab | Módulo | Constructores | Negocio |
| --- | --- | --- | --- |
| 0 / 0N | Apertura | Correr las pruebas, explorar el panel y usar `#file` / `#codebase` | Resumen del problema, preguntas y `#file` |
| 1 / 1N | Specs | Spec completa y tareas ejecutadas; retos Design-First, Quick Spec y Bugfix | Requisitos EARS y Analyze Requirements |
| 2 / 2N | Steering | Estándares de API, antes y después; retos steering global, auto y AGENTS.md | `product.md` y glosario |
| 3 / 3N | Hooks | Lint y pruebas al guardar; proteger `.env`; retos Prompt Submit, manual, Post Tool Use y Post Task Execution | Regla "si cambia una política, actualizar el FAQ" |
| 4 / 4N | MCP, skills y powers | MCP `fetch` y skill `pr-review`; retos opciones de MCP y power propio | Skill `resumen-ejecutivo` |
| 5 / 5N | Workflows | Investigación de solo lectura; retos: subagentes y corregir hasta verificar | Informe de riesgos en segundo plano |
| 6 / 6N | Agentes | Agente revisor en CLI interactivo, headless y CI | Mapa de oportunidades |
