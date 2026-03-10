import express from 'express';
import petRouter from './pet.routes.js';
import adopterRouter from './adopter.routes.js';

const router = (app: express.Router) => {
  app.use(express.json(), petRouter, adopterRouter);
};

export default router;
