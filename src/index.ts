import * as dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

app.listen(3000);
console.log('api funcionando correctamente');
