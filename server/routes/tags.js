import express from 'express';
import prisma from '../config/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all tags
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ]
    });
    res.json(tags);
  } catch (error) {
    next(error);
  }
});

// Get tags by project type
router.get('/type/:projectType', authenticateToken, async (req, res, next) => {
  try {
    const { projectType } = req.params;
    const tags = await prisma.tag.findMany({
      where: {
        projectType: projectType
      },
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ]
    });
    res.json(tags);
  } catch (error) {
    next(error);
  }
});

export default router;