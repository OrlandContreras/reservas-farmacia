# Soluciones de referencia por laboratorio

Úsalas para alcanzar al grupo si te atrasas, o para comparar con lo que generaste. Lo que produzca Kiro en el taller será distinto, y está bien: lo importante es que cumpla el criterio de éxito.

**Ruta Constructores:** copia el contenido de la carpeta del laboratorio dentro de `api/` (que es el workspace técnico).
**Ruta Negocio:** copia `negocio/.kiro/` a la raíz de `reservas-farmacia/`.

| Lab | Módulo | Qué contiene | Dónde copiarlo |
| --- | --- | --- | --- |
| 1 | De la necesidad al plan | Spec "reservas que expiran a las 24 horas" y Bugfix Spec del reto L300 | `api/.kiro/specs/` |
| 2 | El manual de la casa | Steering `product`, `tech`, `structure`, `api-standards` (fileMatch), `troubleshooting` (manual), `reglas-cadena-frio` (auto) y un `AGENTS.md` | `api/.kiro/steering/` y `api/src/routes/` |
| 3 | Reglas automáticas | Hooks de lint y pruebas, protección de `.env`, README al terminar, suite tras cada tarea; scripts y `.kiroignore` | `api/.kiro/hooks/`, `api/scripts/hooks/`, `api/.kiroignore` |
| 4 | Conectar y estandarizar | MCP `fetch` y skill `pr-review` | `api/.kiro/settings/` y `api/.kiro/skills/` |
| 5 | Orquestar trabajo de varios pasos | Prompts de los workflows y una receta de ejemplo | `api/.kiro/workflows/` (opcional) |
| 6 | El agente trabaja solo | Agente `reviewer`, comandos headless y GitHub Actions | `api/.kiro/agents/` y `.github/` en la raíz |
| N | Ruta Negocio | Steering, hook, skill y plantilla del mapa de oportunidades | `reservas-farmacia/.kiro/` |

## Ejemplo: alcanzar al grupo en el Lab 3

```bash
cd reservas-farmacia
cp -r solutions/lab3/.kiro solutions/lab3/scripts solutions/lab3/.kiroignore api/
```

## Qué validar antes del taller

Estos puntos no se pudieron confirmar en la documentación pública y conviene probarlos en la versión de Kiro que se usará:

- El nombre exacto del disparador "Post Task Execution" en JSON (aquí: `PostTaskExecution`). Si no carga, créalo desde el panel con **Ask Kiro to create a hook**.
- La sintaxis de `.kiroignore` (aquí, estilo `.gitignore`).
- La receta `investigar-reservas.yaml`: el agente `wf-planner` viene del ejemplo de la documentación; en el taller basta pedir el workflow en el chat.
