import express from 'express';
const PORT = process.env.port || 3001;
import { pets } from './db/pets.js';

const app = express();

app.use(express.json());

app.get('/api/pets', (req, res) => res.json(Object.values(pets)));

app.post('/api/pets', (req, res) => {
  const petObj = req.body;

  petObj.id = Object.values(pets).length + 1;

  petObj.energy = 100;
  petObj.mood = 'Happy';

  pets[petObj.id] = petObj;

  res.json({ pet: petObj });
});

app.put('/api/pets/:id', (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  const actions = {
    feed: {
      energy: Math.min(pets[id].energy + 10, 100),
    },
    play: {
      energy: Math.max(pets[id].energy - 10, 0),
    },
  };

  const mood = {
    feed: actions[action].energy === 100 ? 'Full' : 'Happy',
    play: actions[action].energy <= 0 ? 'Hungry' : 'Happy',
  };

  pets[id] = {
    ...pets[id],
    energy: actions[action].energy,
    mood: mood[action],
  };

  res.json(pets[id]);
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
