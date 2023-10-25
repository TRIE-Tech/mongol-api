import { historicalFiguresData } from '@mongol-api-data';
import { Router } from 'express';

const historicalFiguresRouter = Router();

historicalFiguresRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ historicalFigures: historicalFiguresData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default historicalFiguresRouter;
