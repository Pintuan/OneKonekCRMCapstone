const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db'); // Import database connection
const router = express.Router();


function getRestriction(accountId) {
    return new Promise((resolve, reject) => {
        const query = 'select userId, position from users u INNER JOIN acounttype accType on u.restriction = accType.restrictionId WHERE userId = ?';
        db.query(query, [accountId], (err, results) => {
            if (err) {
                return reject(err); // Reject the promise on database error
            }

            if (results.length === 0) {
                return reject(new Error('No user found')); // Handle no result case
            }

            const restrictionData = results[0]; // Assume position needs to be hashed

            // Hash the restriction (you can hash `position`, `userId`, or any other data you want)
            bcrypt.hash(restrictionData.position, 10, (err, hashedRestriction) => {
                if (err) {
                    return reject(err); // Reject if hashing fails
                }

                // Resolve the hashed restriction
                resolve({ userId: restrictionData.userId, hashedRestriction });
            });
        });
    });
}

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Please enter both username and password.' });
        }

        // Query to find the user by username
        const query = 'select * from login where username = ?';
        const results = await new Promise((resolve, reject) => {
            db.query(query, [username], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        if (results.length === 0) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        const user = results[0];

        // Compare the password using bcrypt
        const isMatch = await bcrypt.compare(password, user.pWord);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        // Get restriction asynchronously with hashing
        const restriction = await getRestriction(user.accountId);

        // Generate the token
        const token = await new Promise((resolve, reject) => {
            bcrypt.hash(user.pWord, 10, (err, hash) => {
                if (err) return reject(err);
                resolve(hash);
            });
        });

        ipAddress = req.ip;
        await insertLoginLog(user.userId, ipAddress, "login");
        res.json({ message: 'Login successful', token: token, zhas2chasT: restriction });
    } catch (error) {
        res.json({ error: 'Server error', code: error });
    }
});
// Function to insert log
function insertLoginLog(userId, ipAddress, action) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO login_logs (userId, timedate,ationTaken, ipAdd) VALUES (?, ?, ?, ?)';

        // Execute the query with parameters
        db.query(query, [userId, new Date(), action, ipAddress], (err, results) => {
            if (err) {
                return reject(err); // Reject the promise if there's an error
            }

            resolve(results); // Resolve with results if successful
        });
    });
}

module.exports = router;
