import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { crearApp } from '../src/app.js';
import { reiniciarStore } from '../src/store.js';

describe('GET /productos/:sku/disponibilidad', () => {
  beforeEach(() => reiniciarStore());

  it('devuelve las unidades disponibles de un producto en un local', async () => {
    const res = await request(crearApp()).get('/productos/ANA-001/disponibilidad?local=FY-UIO-01');

    expect(res.status).toBe(200);
    expect(res.body.disponibilidad).toEqual([
      { idLocal: 'FY-UIO-01', local: 'Fybeca Quito Norte', unidades: 15 },
    ]);
  });
});
