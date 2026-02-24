import express, { type Response } from 'express';
import router from './routes/index.js';

const app = express();
router(app);

app.get('/', (_, res: Response) => {
  res.send('curso typescript');
});

function createPet(
  id: number,
  name: string,
  species: string,
  age: number,
  adopted: boolean,
) {
  return {
    id,
    name,
    species,
    age,
    adopted,
  };
}

let id = 0;
function generateId() {
  return (id += 1);
}

app.post('/pets', (_, res) => {
  const pet1 = createPet(generateId(), 'katarina', 'cachorro', 7, true);
  const pet2 = createPet(generateId(), 'mia', 'gato', 8, true);

  res.send([pet1, pet2]);
});

export default app;
