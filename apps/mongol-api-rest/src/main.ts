import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello from Mongol API REST' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
