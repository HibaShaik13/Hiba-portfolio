import 'dotenv/config';

import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';

import { PORTFOLIO_DATA } from './backend/data/portfolioData.js';
import { contactRouter } from './backend/routes/contact.js';
import { projectsRouter } from './backend/routes/projects.js';
import { resumeRouter } from './backend/routes/resume.js';
import { aiRouter } from './backend/routes/ai.js';

const rootDir = process.cwd();

async function startServer() {
  const app = express();

  const PORT = process.env.PORT
    ? parseInt(process.env.PORT, 10)
    : 3000;

  // CORS middleware to support separate frontend/backend deployments
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // JSON Body parsing middleware
  app.use(express.json());

  // API Routes
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/api/portfolio', (_req, res) => {
    res.json(PORTFOLIO_DATA);
  });

  app.use('/api', contactRouter);
  app.use('/api', projectsRouter);
  app.use('/api', resumeRouter);
  app.use('/api', aiRouter);

  // Serve generated assets if available
  app.use(
    '/assets',
    express.static(path.join(rootDir, 'src/assets'))
  );

  // Vite development middleware or production static files
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(rootDir, 'dist');

    app.use(express.static(distPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(
      `\n  ⚡ Portfolio Server running locally on http://localhost:${PORT}`
    );
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});