# Lab 0 — Contexto explícito, modos y modelo

## Context providers (Constructores)

Escribe `#` en el chat para ver la lista. Prompts de ejemplo:

```text
#file:src/routes/reservas.ts ¿Qué validaciones hace este archivo antes de tocar el stock?
```

```text
#codebase ¿Dónde se modifica el stock de un local?
```

```text
#terminal Explica la salida de la última corrida de npm test.
```

Otros que conviene conocer: `#folder`, `#git diff`, `#problems`, `#url`, `#spec` y `#steering`.

## Context providers (Negocio)

```text
#file:negocio/politicas-retiro.md Resume cada política en una línea y dime cuál afecta más al stock.
```

## Modo y modelo

- **Vibe:** conversación libre, ideal para preguntas y cambios pequeños.
- **Spec:** Kiro propone una spec antes de escribir código; la usarás en el Lab 1.
- **Selector de modelo** (debajo del chat): `Auto` elige el modelo por ti. Cada pedido consume créditos; el consumo se ve en el panel de uso de tu cuenta.
