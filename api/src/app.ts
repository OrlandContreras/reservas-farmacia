import express from 'express';
import { productosRouter } from './routes/productos.js';
import { reservasRouter } from './routes/reservas.js';

export function crearApp() {
  const app = express();
  app.use(express.json());

  app.get('/salud', (_req, res) => {
    res.json({ estado: 'ok' });
  });
  app.use('/productos', productosRouter);
  app.use('/reservas', reservasRouter);

  return app;
}
