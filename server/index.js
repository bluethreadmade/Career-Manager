import dotenv from 'dotenv';
dotenv.config({path: '../.env'}); // Initialize dotenv

// Debugging the .env file loading
console.log('Loaded DB_USER:', process.env.DB_USER);
console.log('Loaded DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('Loaded DB_URL:', process.env.DB_URL);
console.log('Loaded DB_NAME:', process.env.DB_NAME);


import express from 'express';  // Import express
import cors from 'cors';  // Import cors
import { Sequelize } from 'sequelize'; // Import Sequelize

// // Import pg as a default import and destructure the Pool
// import pg from 'pg';
// const { Pool } = pg;  // Destructure Pool from the imported pg module

const app = express();
app.use(express.json());
app.use(cors());

const sequelize = process.env.DB_URL
? new Sequelize(process.env.DB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

// test route
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// sync sequelize models to the database, then turn on the server
const PORT = process.env.DB_PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});

// // Set up PostgreSQL connection
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: false, // Disable SSL for local development
// });

// app.get('/db-test', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

export default sequelize;
