const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // Import Pool from 'pg' for PostgreSQL
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a pool for PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: '13.211.183.92',
    database: 'onekonekcrm',
    password: '5cnzw7YVXSaRyN6JDm',
    port: 5432, // Default PostgreSQL port
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);

// Test the database connection
pool.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    } else {
        console.log('Connected to the PostgreSQL database');
    }
});

// Endpoint to get plans
app.get('/getPlans', (req, res) => {
    console.log("Retrieving plans...");
    const sql = 'SELECT * FROM plans'; // PostgreSQL uses lowercase for table names by convention
    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results.rows); // Access rows using 'results.rows' in pg
    });
});

const port = 7222;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
