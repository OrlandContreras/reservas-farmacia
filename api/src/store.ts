import { claveStock, stockInicial } from './data/catalogo.js';

export type EstadoReserva = 'activa' | 'retirada' | 'cancelada';

export interface Reserva {
  id: string;
  sku: string;
  idLocal: string;
  cantidad: number;
  cliente: { nombre: string; email: string };
  estado: EstadoReserva;
  creadaEn: string;
}

// Almacenamiento en memoria. Se reinicia con cada arranque del servidor.
let stock = stockInicial();
let reservas = new Map<string, Reserva>();
let secuencia = 0;

export function obtenerStock(idLocal: string, sku: string): number {
  return stock.get(claveStock(idLocal, sku)) ?? 0;
}

export function ajustarStock(idLocal: string, sku: string, delta: number): void {
  stock.set(claveStock(idLocal, sku), obtenerStock(idLocal, sku) + delta);
}

export function guardarReserva(datos: Omit<Reserva, 'id' | 'estado' | 'creadaEn'>): Reserva {
  secuencia += 1;
  const reserva: Reserva = {
    ...datos,
    id: `RES-${String(secuencia).padStart(5, '0')}`,
    estado: 'activa',
    creadaEn: new Date().toISOString(),
  };
  reservas.set(reserva.id, reserva);
  return reserva;
}

export function buscarReserva(id: string): Reserva | undefined {
  return reservas.get(id);
}

export function listarReservas(): Reserva[] {
  return [...reservas.values()];
}

// Solo para pruebas.
export function reiniciarStore(): void {
  stock = stockInicial();
  reservas = new Map();
  secuencia = 0;
}
