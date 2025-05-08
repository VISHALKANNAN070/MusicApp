import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import songsRouter from './songs.js';
import authRouter from './routes/auth.js';
import favoritesRouter from './routes/favourites.js';
import authMiddleware from './routes/authMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/songs', songsRouter);
app.use('/api/auth', authRouter);
app.use('/api/favorites', authMiddleware, favoritesRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
