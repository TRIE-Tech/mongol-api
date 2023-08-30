import cors from 'cors';
import express from 'express';

import clothesRouter from './router/clothes';
import ethnicGroupsRouter from './router/ethnic-groups';
import historicalToolsRouter from './router/historical-tools';
import instrumentsRouter from './router/instruments';
import touristAttractionsRouter from './router/tourist-attractions';
import provincesRouter from './router/provinces';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.json());

app.use('/clothes', clothesRouter);
app.use('/ethnicGroups', ethnicGroupsRouter);
app.use('/historicalTools', historicalToolsRouter);
app.use('/instruments', instrumentsRouter);
app.use('/touristAttractions', touristAttractionsRouter);
app.use('/provinces', provincesRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Hello from Mongol API REST' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

export default app;
