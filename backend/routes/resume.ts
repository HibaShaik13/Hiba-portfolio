import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { buildResumePdf } from '../utils/generateResumePdf.js';

export const resumeRouter = Router();

resumeRouter.get('/resume/info', (_req: Request, res: Response) => {
  res.json({
    name: PORTFOLIO_DATA.profile.name,
    title: PORTFOLIO_DATA.profile.title,
    bio: PORTFOLIO_DATA.profile.bio,
    education: PORTFOLIO_DATA.profile.education,
    cgpa: PORTFOLIO_DATA.profile.cgpa,
    skills: PORTFOLIO_DATA.skills,
    projects: PORTFOLIO_DATA.projects.map(p => ({ title: p.title, subtitle: p.subtitle, tech: p.tech })),
    experiences: PORTFOLIO_DATA.experiences,
    certifications: PORTFOLIO_DATA.certifications
  });
});

resumeRouter.get('/resume/download', async (_req: Request, res: Response) => {
  try {
    const staticPdfPath = path.join(process.cwd(), 'public', 'Hiba_Tharunnum_Shaik_Resume.pdf');
    if (fs.existsSync(staticPdfPath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Hiba_Tharunnum_Shaik_Resume.pdf"');
      return res.sendFile(staticPdfPath);
    }

    const pdfBuffer = await buildResumePdf();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Hiba_Tharunnum_Shaik_Resume.pdf"');
    res.send(pdfBuffer);
  } catch (err) {
    console.error('[Resume Download Error]:', err);
    res.status(500).json({ error: 'Failed to generate PDF resume' });
  }
});

