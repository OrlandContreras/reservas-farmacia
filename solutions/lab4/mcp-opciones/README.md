# Lab 4 (reto L200) — Opciones de configuración de MCP

| Archivo | Dónde va | Para qué |
| --- | --- | --- |
| `mcp.workspace.json` | `api/.kiro/settings/mcp.json` | Configuración del proyecto, viaja con el repositorio |
| `mcp.usuario.json` | `~/.kiro/settings/mcp.json` | Configuración personal, aplica a todos tus proyectos |

Si un servidor aparece en los dos archivos, gana la configuración del workspace.

## Qué muestra `mcp.workspace.json`

- **`autoApprove`:** la herramienta `fetch` se ejecuta sin pedir permiso. Úsalo solo con herramientas de lectura.
- **Servidor remoto (`url`):** `aws-knowledge` se conecta por HTTP, sin instalar nada local. Es público y no pide credenciales.
- **`disabledTools`:** apaga herramientas puntuales de un servidor para no cargarlas en el contexto.

Prueba: en un chat nuevo pide "Busca en la documentación de AWS qué es Amazon Bedrock AgentCore" y revisa en **MCP Servers** qué herramientas aparecen.
