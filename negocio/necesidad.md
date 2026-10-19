# Necesidad de negocio: reservas que bloquean stock

> **Documento ficticio para el workshop de Kiro.** No describe una situación real de Corporación GPF.

**Área solicitante:** Operaciones de farmacia y canal digital · **Prioridad:** alta

## El problema

Desde la app, el cliente puede reservar un producto y retirarlo en el local que elija. Hoy **las reservas no vencen**: si el cliente nunca llega, las unidades quedan apartadas para siempre y el local no puede venderlas.

En una revisión de 4 semanas en 5 locales piloto se encontró que:

- El 18% de las reservas nunca se retiró.
- Las reservas sin retirar bloquearon en promedio 6 unidades por local y por día en productos de alta rotación, como analgésicos y antigripales.
- Los jefes de local liberan el stock a mano, sin un criterio común; algunos lo hacen al día siguiente y otros nunca.
- El cliente no recibe un aviso cuando su reserva está lista, así que no sabe cuándo ir.

## Lo que se pide

1. Que una reserva sin retirar **venza** después de un plazo y libere el stock automáticamente. La propuesta inicial es **24 horas**.
2. Que el cliente **elija el local** de retiro y reciba un **aviso** cuando la reserva esté lista.
3. Que el área de operaciones pueda **listar las reservas vencidas por local** para entender el problema.

## Preguntas que operaciones todavía no ha respondido

- ¿Las 24 horas se cuentan en horario del local o en horas corridas? ¿Qué pasa si el local cierra antes?
- ¿Qué pasa con los feriados?
- ¿Los productos de cadena de frío tienen un plazo distinto?
- ¿Se puede extender una reserva una vez?

## Cómo se medirá el éxito

- Reservas no retiradas por debajo del 8%.
- Cero unidades bloqueadas por más de 24 horas.
- Satisfacción del cliente con el aviso de "reserva lista" medida en la app.
