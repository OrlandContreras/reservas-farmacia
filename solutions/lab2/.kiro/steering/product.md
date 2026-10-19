---
inclusion: always
---
# Producto: API de reservas y retiro en farmacia

> Solución de referencia del Lab 2 (generada con "Generate Steering Docs" y ajustada a mano). Contexto ficticio.

- **Qué es:** el backend que permite a los clientes de Fybeca y SanaSana reservar productos de venta libre en la app y retirarlos en un local.
- **Usuarios:** clientes de la app, jefes de local y el área de operaciones de farmacia.
- **Objetivo de negocio:** que el stock reservado no quede bloqueado y que el cliente sepa cuándo retirar.
- **Reglas que no se negocian:** nunca permitir stock negativo; los productos de cadena de frío tienen plazos más cortos; los datos del cliente se tratan como datos personales y no se registran en logs.
