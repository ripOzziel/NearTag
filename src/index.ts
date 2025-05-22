import app from './app.js';

const port = process.env.PORT
app.listen(port);
console.log('api funcionando correctamente');
console.log(`Corriendo en http://localhost:${port}`)
