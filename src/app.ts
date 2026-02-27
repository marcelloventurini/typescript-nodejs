import express, { type Response } from 'express';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source.js';
import router from './routes/index.js';

const app = express();
router(app);

app.get('/', (_, res: Response) => {
  res.send('curso typescript');
});

AppDataSource.initialize()
  .then(() => console.log('banco de dados conectado'))
  .catch((error) => console.log(error));

export default app;
