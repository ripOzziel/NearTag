import { PrismaClient } from '../src/generated/prisma/index.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createAdmin() {
  const adminPassword = '@@@@'; // Cambiar por una contraseña segura
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  try {
    const admin = await prisma.user.create({
      data: {
        username: 'admin',
        phone_number: '0000000000',
        email: 'admin@neartag.com',
        password_u: hashedPassword,
        role: 'admin',
        creation_date: new Date(),
        jwt_version: 0
      }
    });

    console.log('Admin creado exitosamente:', admin.email);
  } catch (error) {
    console.error('Error creando admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();