---
inclusion: manual
---
# Guía de diagnóstico

Úsala con `#troubleshooting` o como comando `/troubleshooting`.

1. Si una prueba falla por stock, revisa que el `beforeEach` llame a `reiniciarStore()`.
2. Si un import falla en tiempo de ejecución, revisa que termine en `.js` (módulos ES con TypeScript).
3. Si el servidor no arranca, revisa que el puerto 3000 esté libre o usa `PORT=3001 npm run dev`.
4. Antes de cambiar código, reproduce el problema con una prueba que falle.
