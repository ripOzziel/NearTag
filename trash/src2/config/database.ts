import { Sequelize } from 'sequelize';
import { config } from './env';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = config;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false, // Desactiva logs en consola
});