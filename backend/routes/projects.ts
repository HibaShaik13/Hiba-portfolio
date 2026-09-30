import { Router, Request, Response } from 'express';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export const projectsRouter = Router();

projectsRouter.get('/projects', (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;

  let filtered = PORTFOLIO_DATA.projects;
  if (category && category !== 'All') {
    filtered = PORTFOLIO_DATA.projects.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json({
    total: filtered.length,
    projects: filtered
  });
});

projectsRouter.get('/projects/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);

  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  res.json({ project });
});
