import { Router } from 'express';
import { locales, productos } from '../data/catalogo.js';
import { ajustarStock, buscarReserva, guardarReserva, obtenerStock } from '../store.js';

export const reservasRouter = Router();

// POST /reservas  { sku, idLocal, cantidad, cliente: { nombre, email } }
reservasRouter.post('/', (req, res) => {
  const { sku, idLocal, cantidad, cliente } = req.body ?? {};

  if (!sku || !idLocal || !cantidad || !cliente?.nombre || !cliente?.email) {
    return res.status(400).send('Faltan datos de la reserva');
  }
  if (!productos.some((p) => p.sku === sku)) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  if (!locales.some((l) => l.id === idLocal)) {
    return res.status(404).json({ error: 'local no existe' });
  }
  if (!Number.isInteger(cantidad) || cantidad < 1) {
    return res.status(400).json({ error: 'cantidad inválida' });
  }
  if (obtenerStock(idLocal, sku) < cantidad) {
    return res.status(409).json({ message: 'Stock insuficiente' });
  }

  ajustarStock(idLocal, sku, -cantidad);
  const reserva = guardarReserva({ sku, idLocal, cantidad, cliente });
  res.status(201).json(reserva);
});

// GET /reservas/:id
reservasRouter.get('/:id', (req, res) => {
  const reserva = buscarReserva(req.params.id);
  if (!reserva) {
    return res.status(404).json({ message: 'Reserva no encontrada' });
  }
  res.json(reserva);
});

// PATCH /reservas/:id  { cantidad }
// Cambia la cantidad reservada y ajusta el stock con la diferencia.
reservasRouter.patch('/:id', (req, res) => {
  const reserva = buscarReserva(req.params.id);
  if (!reserva) {
    return res.status(404).json({ message: 'Reserva no encontrada' });
  }

  const nuevaCantidad = Number(req.body?.cantidad);
  const diferencia = nuevaCantidad - reserva.cantidad;

  if (diferencia > 0 && obtenerStock(reserva.idLocal, reserva.sku) < diferencia) {
    return res.status(409).json({ message: 'Stock insuficiente' });
  }

  ajustarStock(reserva.idLocal, reserva.sku, -diferencia);
  reserva.cantidad = nuevaCantidad;
  res.json(reserva);
});
