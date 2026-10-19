#!/usr/bin/env node
// Hook PostFileSave (Lab 3): corre ESLint --fix y las pruebas relacionadas con los
// archivos .ts que el agente acaba de guardar. Kiro envía el contexto como JSON por STDIN.
// Si algo falla, sale con código distinto de cero y el detalle llega al agente por stderr.
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const leerStdin = async () => {
  let datos = '';
  for await (const parte of process.stdin) datos += parte;
  return datos;
};

// Busca rutas .ts/.tsx en cualquier campo del JSON, sin depender de un nombre de campo exacto.
const buscarArchivos = (valor, encontrados = new Set()) => {
  if (typeof valor === 'string') {
    if (/\.(ts|tsx)$/.test(valor) && existsSync(valor)) encontrados.add(valor);
  } else if (Array.isArray(valor)) {
    valor.forEach((v) => buscarArchivos(v, encontrados));
  } else if (valor && typeof valor === 'object') {
    Object.values(valor).forEach((v) => buscarArchivos(v, encontrados));
  }
  return encontrados;
};

const correr = (args) => spawnSync('npx', args, { encoding: 'utf8', shell: process.platform === 'win32' });

const entrada = await leerStdin();
let contexto = {};
try {
  contexto = entrada ? JSON.parse(entrada) : {};
} catch {
  contexto = { texto: entrada };
}

const archivos = [...buscarArchivos(contexto)];
const objetivo = archivos.length ? archivos : ['src', 'tests'];

const lint = correr(['eslint', '--fix', ...objetivo]);
const pruebas = archivos.length
  ? correr(['vitest', 'related', '--run', ...archivos])
  : correr(['vitest', 'run']);

if (lint.status !== 0 || pruebas.status !== 0) {
  process.stderr.write('El hook de calidad encontró problemas. Corrígelos antes de seguir.\n');
  process.stderr.write(lint.stdout + lint.stderr + pruebas.stdout + pruebas.stderr);
  process.exit(1);
}

process.stdout.write(`Lint y pruebas relacionadas OK (${objetivo.join(', ')}).\n`);
