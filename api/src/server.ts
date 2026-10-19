import { crearApp } from './app.js';

const puerto = Number(process.env.PORT ?? 3000);

crearApp().listen(puerto, () => {
  console.log(`API de reservas escuchando en http://localhost:${puerto}`);
});
