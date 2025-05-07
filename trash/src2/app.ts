import express from 'express';
import cors from 'cors';
import { usersRouter } from './routes/usersRoutes.js';
import { sequelize } from './config/database.js';

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', usersRouter);

// Conexión a DB y servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});