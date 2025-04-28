import express from 'express';
import cors from 'cors';
import songsRouter from './songs.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/songs', songsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
