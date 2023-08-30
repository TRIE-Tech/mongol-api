import { Router } from 'express';
import { provincesData } from '@mongol-api-data';

const provinceRouter = Router();

provinceRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ province: provincesData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default provinceRouter;
