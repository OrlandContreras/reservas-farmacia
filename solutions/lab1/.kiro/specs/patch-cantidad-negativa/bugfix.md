# Bugfix — PATCH /reservas/:id acepta cantidades negativas

> Solución de referencia del reto L300 del Lab 1.

## Comportamiento actual

`PATCH /reservas/:id` acepta cualquier valor en `cantidad`, incluidos negativos, cero y texto. Con `cantidad: -5` en una reserva de 2 unidades, la diferencia es -7 y el stock del local **aumenta** en 7 unidades que no existen. Con texto, la cantidad queda como `NaN`.

**Reproducción:** crear una reserva de 2 unidades de ANA-001 en FY-UIO-01 (stock 15 → 13) y enviar `PATCH` con `{ "cantidad": -5 }`. El stock queda en 20.

## Comportamiento esperado

- Si `cantidad` no es un entero mayor o igual a 1, responder **400** con el formato estándar de errores y no cambiar ni la reserva ni el stock.
- Solo se pueden modificar reservas en estado `activa`.

## Comportamiento que no debe cambiar

- Aumentar la cantidad con stock suficiente sigue funcionando y descuenta la diferencia.
- Reducir la cantidad devuelve la diferencia al stock.
- Una reserva inexistente sigue respondiendo 404.

## Causa raíz

El handler convierte `req.body.cantidad` con `Number()` y no valida el resultado antes de calcular la diferencia y ajustar el stock.
