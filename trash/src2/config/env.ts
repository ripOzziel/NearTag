import dotenv from 'dotenv';
dotenv.config();

export const config = {
  DB_NAME: process.env.DB_NAME || 'neartag_db',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || 'localhost',
  JWT_SECRET: process.env.JWT_SECRET || 'secret_key',
};