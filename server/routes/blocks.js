import express from 'express';
import prisma from '../config/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/block-variants', authenticateToken, async (req, res) => {
  try {
    const variants = await prisma.blockVariant.findMany();
    res.json(variants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch block variants' });
  }
});

router.get('/mobile-block-variants', authenticateToken, async (req, res) => {
  try {
    const variants = await prisma.mobileBlockVariant.findMany();
    res.json(variants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mobile block variants' });
  }
});

export default router;