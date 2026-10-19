# Lab 5 — Prompts de los workflows

## Constructores (núcleo)

```text
Usa un workflow para investigar cómo se calcula la disponibilidad y cómo se crean
y actualizan las reservas en este repositorio. No modifiques el proyecto. Cita
archivos y funciones, señala riesgos, y guarda el informe en .kiro/reports/reservas.md.
```

## Reto L200: mensaje al paso en ejecución

En **Workflows**, selecciona el paso y escribe en **Message this step's agent**:

```text
Incluye también qué pasa si dos clientes reservan la última unidad al mismo tiempo.
```

## Reto L300: corregir hasta verificar (rama lab5-inicio)

```bash
git switch lab5-inicio
cd api && npm test   # debe fallar: reservas-patch.test.ts está activo
```

```text
Usa un workflow para que npm test pase sin cambiar el comportamiento esperado:
reproduce el fallo, corrige una causa a la vez y vuelve a correr la misma prueba.
Pausa y pregúntame después de 5 intentos.
```

## Ruta Negocio (Lab 5N)

```text
Usa un workflow en segundo plano para revisar los documentos de negocio/ y mi
requirements.md del Lab 1N. Entrégame un informe con citas: riesgos operativos
para los locales de que las reservas expiren a las 24 horas, y preguntas abiertas
para el área de operaciones. No modifiques archivos; guarda el informe en
.kiro/reports/riesgos-reservas.md.
```
