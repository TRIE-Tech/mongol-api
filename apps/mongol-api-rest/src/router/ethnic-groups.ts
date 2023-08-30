import { ethnicGroupsData } from '@mongol-api-data';
import { Router } from 'express';

const ethnicGroupsRouter = Router();

ethnicGroupsRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ ethnicGroups: ethnicGroupsData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default ethnicGroupsRouter;
