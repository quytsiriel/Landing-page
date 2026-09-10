import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from '../server/routes/api.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Support both /api/... and direct /...
app.use('/api', apiRouter);
app.use('/', apiRouter);

// Serverless health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    environment: 'vercel-serverless',
    timestamp: new Date().toISOString()
  });
});

export default app;
