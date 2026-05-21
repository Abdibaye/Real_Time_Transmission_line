import express from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true,
}));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Better Auth integration
app.use("/api/auth", toNodeHandler(auth));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});