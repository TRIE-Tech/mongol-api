import { Router } from 'express';
import { historicalToolsData } from '@mongol-api-data';

const historicalToolsRouter = Router();

historicalToolsRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ historicalTools: historicalToolsData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default historicalToolsRouter;
