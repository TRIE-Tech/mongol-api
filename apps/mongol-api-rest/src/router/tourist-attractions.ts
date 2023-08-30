import { Router } from 'express';
import { touristAttractionsData } from '@mongol-api-data';

const touristAttractionsRouter = Router();

touristAttractionsRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ touristAttractions: touristAttractionsData() });
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
  }
});

export default touristAttractionsRouter;
