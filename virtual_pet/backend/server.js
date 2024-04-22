import express from 'express';
const PORT = process.env.port || 3001;
import { pets } from './db/pets.js';

const app = express();

app.get('/api/pets', (req, res) => res.json(pets));

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
