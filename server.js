// index.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config.js';
import itemRoutes from './item.routes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

