import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { crearApp } from '../src/app.js';
import { obtenerStock, reiniciarStore } from '../src/store.js';

const cliente = { nombre: 'Cliente de prueba', email: 'cliente@gpf-lab.example' };

describe('PATCH /reservas/:id', () => {
  beforeEach(() => reiniciarStore());

  // Pendiente: se activa en el reto L300 del Lab 1 (Bugfix Spec) y en la rama lab5-inicio (Lab 5).
  it.skip('rechaza una cantidad negativa sin cambiar el stock', async () => {
    const app = crearApp();
    const creada = await request(app)
      .post('/reservas')
      .send({ sku: 'ANA-001', idLocal: 'FY-UIO-01', cantidad: 2, cliente });
    const stockAntes = obtenerStock('FY-UIO-01', 'ANA-001');

    const res = await request(app).patch(`/reservas/${creada.body.id}`).send({ cantidad: -5 });

    expect(res.status).toBe(400);
    expect(obtenerStock('FY-UIO-01', 'ANA-001')).toBe(stockAntes);
  });
});
