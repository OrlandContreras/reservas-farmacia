// Datos ficticios para el workshop de Kiro. No corresponden a productos, locales ni precios reales.

export interface Producto {
  sku: string;
  nombre: string;
  categoria: string;
  precioUsd: number;
  requiereReceta: boolean;
  cadenaFrio: boolean;
}

export interface Local {
  id: string;
  nombre: string;
  marca: 'Fybeca' | 'SanaSana';
  ciudad: string;
  horario: string;
}

export const productos: Producto[] = [
  { sku: 'ANA-001', nombre: 'Paracetamol 500 mg x 20 tab (Farmalis)', categoria: 'Analgésicos', precioUsd: 2.4, requiereReceta: false, cadenaFrio: false },
  { sku: 'ANA-002', nombre: 'Ibuprofeno 400 mg x 10 tab (Farmalis)', categoria: 'Analgésicos', precioUsd: 3.1, requiereReceta: false, cadenaFrio: false },
  { sku: 'ANA-003', nombre: 'Analgésico infantil jarabe 120 ml (Pequesana)', categoria: 'Analgésicos', precioUsd: 5.6, requiereReceta: false, cadenaFrio: false },
  { sku: 'GRI-001', nombre: 'Antigripal día y noche x 12 tab (Respira+)', categoria: 'Antigripales', precioUsd: 6.2, requiereReceta: false, cadenaFrio: false },
  { sku: 'GRI-002', nombre: 'Jarabe para la tos 180 ml (Respira+)', categoria: 'Antigripales', precioUsd: 7.8, requiereReceta: false, cadenaFrio: false },
  { sku: 'GRI-003', nombre: 'Pastillas para la garganta x 24 (Respira+)', categoria: 'Antigripales', precioUsd: 3.5, requiereReceta: false, cadenaFrio: false },
  { sku: 'VIT-001', nombre: 'Vitamina C 1 g efervescente x 10 (Vitalis)', categoria: 'Vitaminas', precioUsd: 4.9, requiereReceta: false, cadenaFrio: false },
  { sku: 'VIT-002', nombre: 'Multivitamínico adulto x 30 (Vitalis)', categoria: 'Vitaminas', precioUsd: 12.5, requiereReceta: false, cadenaFrio: false },
  { sku: 'VIT-003', nombre: 'Vitamina D3 gotas 30 ml (Vitalis)', categoria: 'Vitaminas', precioUsd: 9.8, requiereReceta: false, cadenaFrio: false },
  { sku: 'CPE-001', nombre: 'Shampoo anticaspa 400 ml (Brisa)', categoria: 'Cuidado personal', precioUsd: 6.7, requiereReceta: false, cadenaFrio: false },
  { sku: 'CPE-002', nombre: 'Crema dental protección total 100 g (Brisa)', categoria: 'Cuidado personal', precioUsd: 2.9, requiereReceta: false, cadenaFrio: false },
  { sku: 'DER-001', nombre: 'Protector solar FPS 50 120 ml (Dermalia)', categoria: 'Dermocosmética', precioUsd: 18.9, requiereReceta: false, cadenaFrio: false },
  { sku: 'DER-002', nombre: 'Crema hidratante facial 50 ml (Dermalia)', categoria: 'Dermocosmética', precioUsd: 22.4, requiereReceta: false, cadenaFrio: false },
  { sku: 'BEB-001', nombre: 'Pañales etapa 3 x 40 (Pequesana)', categoria: 'Bebé', precioUsd: 15.9, requiereReceta: false, cadenaFrio: false },
  { sku: 'BEB-002', nombre: 'Toallitas húmedas x 80 (Pequesana)', categoria: 'Bebé', precioUsd: 3.4, requiereReceta: false, cadenaFrio: false },
  { sku: 'PAU-001', nombre: 'Alcohol antiséptico 500 ml (CuraFácil)', categoria: 'Primeros auxilios', precioUsd: 2.7, requiereReceta: false, cadenaFrio: false },
  { sku: 'PAU-002', nombre: 'Curitas surtidas x 30 (CuraFácil)', categoria: 'Primeros auxilios', precioUsd: 2.2, requiereReceta: false, cadenaFrio: false },
  { sku: 'FRI-001', nombre: 'Probiótico refrigerado x 10 frascos (Vitalis Frío)', categoria: 'Cadena de frío', precioUsd: 11.3, requiereReceta: false, cadenaFrio: true },
  { sku: 'FRI-002', nombre: 'Suero oral refrigerado 500 ml (Vitalis Frío)', categoria: 'Cadena de frío', precioUsd: 2.6, requiereReceta: false, cadenaFrio: true },
  { sku: 'FRI-003', nombre: 'Gel frío terapéutico (CuraFácil)', categoria: 'Cadena de frío', precioUsd: 5.4, requiereReceta: false, cadenaFrio: true },
];

export const locales: Local[] = [
  { id: 'FY-UIO-01', nombre: 'Fybeca Quito Norte', marca: 'Fybeca', ciudad: 'Quito', horario: '24 horas' },
  { id: 'SS-UIO-01', nombre: 'SanaSana Quito Centro', marca: 'SanaSana', ciudad: 'Quito', horario: '08:00-21:00' },
  { id: 'FY-GYE-01', nombre: 'Fybeca Guayaquil Samborondón', marca: 'Fybeca', ciudad: 'Guayaquil', horario: '24 horas' },
  { id: 'SS-GYE-01', nombre: 'SanaSana Guayaquil Centro', marca: 'SanaSana', ciudad: 'Guayaquil', horario: '08:00-21:00' },
  { id: 'SS-CUE-01', nombre: 'SanaSana Cuenca Centro', marca: 'SanaSana', ciudad: 'Cuenca', horario: '08:00-21:00' },
];

// Stock inicial determinístico por local y SKU (ficticio).
export function stockInicial(): Map<string, number> {
  const stock = new Map<string, number>();
  locales.forEach((local, i) => {
    productos.forEach((producto, j) => {
      stock.set(claveStock(local.id, producto.sku), ((i + 3) * (j + 5)) % 37);
    });
  });
  return stock;
}

export function claveStock(idLocal: string, sku: string): string {
  return `${idLocal}|${sku}`;
}
