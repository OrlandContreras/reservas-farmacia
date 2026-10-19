import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { crearApp } from '../src/app.js';
import { obtenerStock, reiniciarStore } from '../src/store.js';

const cliente = { nombre: 'Cliente de prueba', email: 'cliente@gpf-lab.example' };

describe('Reservas', () => {
  beforeEach(() => reiniciarStore());

  it('crea una reserva y descuenta el stock del local', async () => {
    const res = await request(crearApp())
      .post('/reservas')
      .send({ sku: 'ANA-001', idLocal: 'FY-UIO-01', cantidad: 2, cliente });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ sku: 'ANA-001', idLocal: 'FY-UIO-01', cantidad: 2, estado: 'activa' });
    expect(obtenerStock('FY-UIO-01', 'ANA-001')).toBe(13);
  });

  it('consulta una reserva por su id', async () => {
    const app = crearApp();
    const creada = await request(app)
      .post('/reservas')
      .send({ sku: 'VIT-001', idLocal: 'SS-GYE-01', cantidad: 1, cliente });

    const res = await request(app).get(`/reservas/${creada.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(creada.body.id);
  });
});
