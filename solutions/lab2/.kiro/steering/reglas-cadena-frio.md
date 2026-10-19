---
inclusion: auto
name: reglas-cadena-frio
description: Reglas de negocio para productos de cadena de frío (refrigerados) en reservas y retiro. Usar al crear, modificar o vencer reservas de productos con cadenaFrio en true.
---
# Reglas de cadena de frío

- Un producto refrigerado se identifica con `cadenaFrio: true` en `src/data/catalogo.ts` (SKU que empiezan con `FRI-`).
- Su reserva vence al **cierre del mismo día** del local, si eso ocurre antes de las 24 horas.
- No se aceptan cambios de local en reservas de cadena de frío una vez preparadas.

Reto L300 del Lab 2: comprueba que este archivo se carga al pedir "agrega una regla de vencimiento para productos refrigerados" y no al pedir "agrega un endpoint de salud".
