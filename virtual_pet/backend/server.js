import express from 'express';
const PORT = process.env.port || 3001;
import { pets } from './db/pets.js';

const app = express();

app.use(express.json());

app.get('/api/pets', (req, res) => res.json(pets));

app.post('/api/pets', (req, res) => {
  const petObj = req.body;

  petObj.id = pets.length + 1;
  petObj.energy = 100;
  petObj.mood = 'Happy';

  pets.push(petObj);

  res.json({ pet: petObj });
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
