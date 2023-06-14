import express from 'express';
import { getAll } from './controllers/planets';

const router = express.Router();

router.get('/api/planets', getAll);

export default router;
