#!/usr/bin/env node
// Hook PostToolUse (reto L300 del Lab 3): registra cada comando de terminal que ejecuta el agente.
// Lee el contexto por STDIN y agrega una línea con la fecha a .kiro/logs/comandos.log.

import { appendFileSync, mkdirSync } from 'node:fs';

let entrada = '';
for await (const parte of process.stdin) entrada += parte;

// El contexto llega como JSON; si no se puede leer, se guarda el texto tal cual en una sola línea.
let detalle;
try {
  const datos = JSON.parse(entrada);
  detalle = datos.tool_input?.command ?? JSON.stringify(datos.tool_input ?? datos);
} catch {
  detalle = entrada.trim();
}

mkdirSync('.kiro/logs', { recursive: true });
appendFileSync('.kiro/logs/comandos.log', `${new Date().toISOString()} ${detalle.replace(/\s+/g, ' ')}\n`);

process.exit(0);
