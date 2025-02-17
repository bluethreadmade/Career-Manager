import dotenv from 'dotenv';
dotenv.config(); // Initialize dotenv
import express from 'express';  // Import express
import cors from 'cors';  // Import cors

// Import pg as a default import and destructure the Pool
import pg from 'pg';
const { Pool } = pg;  // Destructure Pool from the imported pg module

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Set up PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // Disable SSL for local development
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
