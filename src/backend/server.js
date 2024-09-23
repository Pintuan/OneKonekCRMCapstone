const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'onekonekcrm'
});


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('/getPlans', (req, res) => {
    console.log("retrieving plans...");
    let sql = 'SELECT * FROM PLANS';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

const port = 7222;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
