import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';  // ← ADD THIS
import { fileURLToPath } from 'url';  // ← ADD THIS
import orderRouter from './routes/orderRoute.js';

const app = express();

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use('/api/order', orderRouter);

// ⭐ ADD THIS - Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
}

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
    console.log(`server is connected to ${port}`);
});
