import { Router } from 'express';
import { provincesData } from '@mongol-api-data';

const provincesRouter = Router();

provincesRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ provinces: provincesData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default provincesRouter;
