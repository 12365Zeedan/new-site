import mongoose from 'mongoose';
import { env } from './env.js';

export const connectDatabase = async () => {
  if (!env.mongoUri) {
    throw new Error('MONGO_URI is required to connect to MongoDB');
  }

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
  });

  mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error', error);
  });

  await mongoose.connect(env.mongoUri, {
    autoIndex: env.nodeEnv !== 'production'
  });
};
