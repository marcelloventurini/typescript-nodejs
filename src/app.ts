import express, { type Response } from 'express';
import router from './routes/index.js';
import 'reflect-metadata';

const app = express();
router(app);

app.get('/', (_, res: Response) => {
  res.send('curso typescript');
});

export default app;
