import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import deviceRoutes from './routes/device.routes';
import locationRoutes from './routes/location.routes';

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/devices', deviceRoutes);
app.use('/locations', locationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
