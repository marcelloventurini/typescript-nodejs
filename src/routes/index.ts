import express from 'express';
import petRouter from './pet.routes.js';

const router = (app: express.Router) => {
  app.use(express.json(), petRouter);
};

export default router;
