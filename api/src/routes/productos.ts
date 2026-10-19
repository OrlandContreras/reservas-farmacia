import { Router } from 'express';
import { locales, productos } from '../data/catalogo.js';
import { obtenerStock } from '../store.js';

export const productosRouter = Router();

// GET /productos/:sku/disponibilidad?local=FY-UIO-01
productosRouter.get('/:sku/disponibilidad', (req, res) => {
  const producto = productos.find((p) => p.sku === req.params.sku);
  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  const idLocal = typeof req.query.local === 'string' ? req.query.local : undefined;
  const localesConsultados = idLocal ? locales.filter((l) => l.id === idLocal) : locales;
  if (idLocal && localesConsultados.length === 0) {
    return res.status(404).json({ error: 'local no existe' });
  }

  res.json({
    sku: producto.sku,
    nombre: producto.nombre,
    disponibilidad: localesConsultados.map((l) => ({
      idLocal: l.id,
      local: l.nombre,
      unidades: obtenerStock(l.id, producto.sku),
    })),
  });
});
