# Requirements Document — Reservas que expiran a las 24 horas

> Solución de referencia del Lab 1 y el Lab 1N. La spec que genere Kiro en el taller será distinta; sirve para comparar.

## Introduction

Las reservas sin retirar bloquean stock indefinidamente. Esta funcionalidad hace que una reserva venza a las 24 horas, libere el stock, avise al cliente cuando la reserva esté lista y permita a operaciones listar las reservas vencidas por local.

## Glossary

- **Reserva activa:** reserva creada y aún no retirada, cancelada ni vencida.
- **Reserva vencida:** reserva que superó el plazo sin ser retirada.
- **Plazo de retiro:** 24 horas corridas desde que la reserva queda lista.

## Requirements

### Requirement 1: Vencimiento de reservas

**User Story:** Como jefe de local, quiero que las reservas no retiradas venzan solas, para que el stock vuelva a estar disponible para la venta.

#### Acceptance Criteria

1. WHEN una reserva activa cumple 24 horas desde que quedó lista THE SYSTEM SHALL cambiar su estado a `vencida`.
2. WHEN una reserva cambia a `vencida` THE SYSTEM SHALL devolver sus unidades al stock disponible del local.
3. WHEN una reserva está `retirada` o `cancelada` THE SYSTEM SHALL NOT cambiar su estado a `vencida`.
4. WHEN se consulta una reserva vencida THE SYSTEM SHALL mostrar la fecha y hora en que venció.

### Requirement 2: Local de retiro y aviso de reserva lista

**User Story:** Como cliente, quiero elegir el local y recibir un aviso cuando mi reserva esté lista, para saber cuándo ir.

#### Acceptance Criteria

1. WHEN el cliente crea una reserva THE SYSTEM SHALL exigir un local de retiro válido.
2. WHEN una reserva pasa a estado `lista` THE SYSTEM SHALL registrar un aviso para el cliente con el local y la hora límite de retiro.
3. IF el local no tiene stock suficiente THEN THE SYSTEM SHALL rechazar la reserva e informar las unidades disponibles.

### Requirement 3: Reservas vencidas por local

**User Story:** Como analista de operaciones, quiero listar las reservas vencidas por local, para entender dónde ocurre el problema.

#### Acceptance Criteria

1. WHEN operaciones consulta las reservas vencidas de un local THE SYSTEM SHALL devolver las reservas vencidas de ese local ordenadas de la más reciente a la más antigua.
2. WHEN la consulta incluye un rango de fechas THE SYSTEM SHALL filtrar por la fecha de vencimiento.
3. IF el local no existe THEN THE SYSTEM SHALL responder con un error 404 en el formato estándar de errores.

### Requirement 4: Cadena de frío (decisión de negocio en el Lab 1N)

**User Story:** Como químico farmacéutico, quiero un plazo menor para productos refrigerados, para no romper la cadena de frío.

#### Acceptance Criteria

1. WHEN una reserva contiene un producto de cadena de frío THE SYSTEM SHALL vencerla al cierre del mismo día del local, si eso ocurre antes de las 24 horas.

## Preguntas resueltas con Analyze Requirements (ejemplo)

| Ambigüedad | Decisión |
| --- | --- |
| ¿24 horas corridas o en horario del local? | Corridas, salvo cadena de frío (Requirement 4) |
| ¿Desde la creación o desde que está lista? | Desde que está lista |
| ¿Feriados? | Fuera de alcance de esta versión; se registra como pendiente |
