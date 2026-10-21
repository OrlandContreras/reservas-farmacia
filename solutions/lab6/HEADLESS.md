# Lab 6 — Kiro CLI: modo interactivo y headless

## Reto L200: modo interactivo (antes del headless)

```bash
cd api
kiro-cli chat --agent reviewer
```

Dentro de la sesión:

| Comando | Para qué |
| --- | --- |
| `/tools` | Ver los IDs exactos de las herramientas y cuáles están aprobadas. Úsalos en `--trust-tools` |
| `/agent list` | Ver los agentes disponibles (debe aparecer `reviewer`) |
| `/context show` | Ver qué steering y skills cargó el agente |
| `/model` | Ver o cambiar el modelo |
| `/quit` | Salir |

## Ejecución en modo headless

```bash
cd api
export KIRO_API_KEY=<tu-api-key>
kiro-cli chat --v3 --no-interactive --agent reviewer \
  --trust-tools=read_file,grep_search \
  "Revisa el último commit usando el skill pr-review"

# Misma ejecución con eventos en JSON Lines, para scripts y CI
kiro-cli chat --v3 --no-interactive --agent reviewer \
  --trust-tools=read_file,grep_search --output-format stream-json \
  "Revisa el último commit usando el skill pr-review"
echo "código de salida: $?"
```

Para el workflow de GitHub Actions, copia `.github/` a la raíz del repositorio y crea el secreto `KIRO_API_KEY`.
Nota: `--trust-tools` aprueba IDs exactos de herramientas; si tu versión de la CLI usa otros IDs, revísalos con `/tools` en una sesión interactiva.
