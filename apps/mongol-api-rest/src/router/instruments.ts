import { Router } from 'express';
import { instrumentsData } from '@mongol-api-data';

const instrumentsRouter = Router();

instrumentsRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ instruments: instrumentsData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default instrumentsRouter;
