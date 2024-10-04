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

            const restrictionData = results[0];
            console.log(restrictionData.position);
            bcrypt.hash(restrictionData.position, 10, (err, hashedRestriction) => {
                if (err) {
                    return reject(err); // Reject if hashing fails
                }

                // Resolve the hashed restriction
                resolve(hashedRestriction);
            });
        });
    });
}

router.post('/redirect', async (req, res) => {
    try {
        const { data } = req.body;
        const temp = "Owner";
        const auth = await bcrypt.compare(temp, data);
        if (auth) {
            return res.json({ path: "/Admin" });
        }
        else {
            return res.json({ path: "/Staff" });
        }
    } catch (error) {
        return res.status(400).json({ code: error })
    }

});

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
        res.json({ message: 'Login successful', token: token, zhas2chasT: restriction });
    } catch (error) {
        res.json({ error: 'Server error', code: error });
    }
});
router.post('/getTransactions', async (req, res) => {
    const authorizationToken = req.body;
    const query = 'select p.paymentId, CONCAT(u.firstName, " ", u.middleName, " ", u.lastName) as name, p.paymentDate, plans.planName, a.billingDate, p.totalPaid, p.rebate from payments p INNER JOIN accounts a on p.accountId = a.accountId INNER JOIN users u on a.userId = u.userId INNER JOIN plans on p.plan = plans.planId';
    if (authorizationToken != null) {
        db.query(query, (error, results) => {
            if (error) {
                return res.status(400).json({ error: error })
            }
            res.json(results)
        })
    }

});

router.post('/getStaff', async (req, res) => {
    const authorizationToken = req.body;
    const query = "SELECT users.userId,CONCAT(users.firstName,' ',users.lastName) as name, users.email,users.contactNum as contact, acounttype.position FROM users " +
        "INNER JOIN acounttype on users.restriction = acounttype.restrictionid " +
        "WHERE users.restriction != 99999999999 and users.restriction != 25464136845";
    if (authorizationToken != null) {
        db.query(query, (error, results) => {
            if (error) {
                return res.status(400).json({ error: error })
            }
            res.json(results)
        })
    }

});
router.post('/getPlans', async (req, res) => {
    const authorizationToken = req.body;
    const query = "SELECT * FROM plans";
    if (authorizationToken != null) {
        db.query(query, (error, results) => {
            if (error) {
                return res.status(400).json({ error: error })
            }
            res.json(results)
        })
    }

});
// Function to insert log
function insertLoginLog(userId, ipAddress, action) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO login_logs (userId, timedate,actionTaken, ipAdd) VALUES (?, ?, ?, ?)';

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
