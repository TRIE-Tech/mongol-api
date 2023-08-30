import { Router } from 'express';
import { clothesData } from '@mongol-api-data';

const clothesRouter = Router();

clothesRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ clothes: clothesData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default clothesRouter;
