const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db'); // Import database connection
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Please enter both username and password.' });
    }

    // Query to find the user by username
    const query = 'select * from login where username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        const user = results[0];


        // Compare the password using bcrypt
        bcrypt.compare(password, user.pWord, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: 'Error comparing passwords.' });
            }

            if (!isMatch) {
                return res.status(400).json({ error: 'Invalid username or password.' });
            }
            token = bcrypt.hash(user.pWord, 10, (err, token) => {
                if (err) { return res.status(err).json({ message: err.message }); }
                res.json({ message: 'Login successful', token });
            });

        });
    });
});

module.exports = router;
