const express = require('express');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg'); // Import pg Pool for PostgreSQL
const router = express.Router();

// Configure your PostgreSQL connection
const pool = new Pool({
    user: 'onekonek@123',
    host: '192.168.100.21',
    database: 'onekonekcrm',
    password: 'admin@1123',
    port: 5432, // Default PostgreSQL port
});

// Function to query the database
function queryDatabase(query, params) {
    return new Promise((resolve, reject) => {
        pool.query(query, [params], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
}

pool.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    } else {
        console.log('Connected to the PostgreSQL database');
    }
});
// Function to get restriction details
async function getRestriction(accountId) {
    try {
        const query = `
            SELECT u."userId", accType.position 
            FROM users u 
            INNER JOIN acounttype accType 
            ON u.restriction = accType."restrictionId"
            WHERE u."userId" = $1
        `;
        const results = await queryDatabase(query, accountId);

        if (results.length === 0) {
            throw new Error('No user found');
        }

        const restrictionData = results[0];
        const hashedRestriction = await bcrypt.hash(restrictionData.position, 10);
        return hashedRestriction;
    } catch (error) {
        throw error;
    }
}

// Function to check if a username is unique
async function checkUsername(username) {
    try {
        const query = 'SELECT * FROM login WHERE username = $1';
        const results = await queryDatabase(query, [username]);
        return results.length === 0;
    } catch (error) {
        throw error;
    }
}

// Function to verify password
async function verifyPassword(accountId, password) {
    try {
        const query = 'SELECT * FROM login WHERE accountid = $1';
        const results = await queryDatabase(query, [accountId]);

        if (results.length === 0) {
            throw new Error('No user found');
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.pword);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

// Function to verify email uniqueness
async function verifyEmail(email) {
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const results = await queryDatabase(query, [email]);
        return results.length === 0;
    } catch (error) {
        throw error;
    }
}

// Function to generate a unique ID
async function genId(table, field, length) {
    let isUnique = false;
    let id;
    while (!isUnique) {
        id = Math.floor(Math.random() * length);
        const query = `SELECT * FROM ${table} WHERE ${field} = $1`;
        const results = await queryDatabase(query, [id]);
        isUnique = results.length === 0;
    }
    return id;
}

// Route to handle redirects
router.post('/redirect', async (req, res) => {
    try {
        const { data } = req.body;
        const admin = await bcrypt.compare('Admin', data);
        const staff = await bcrypt.compare('Staff', data);

        if (admin) {
            return res.json({ path: '/Admin' });
        }
        if (staff) {
            return res.json({ path: '/Staff' });
        }
    } catch (error) {
        return res.status(400).json({ code: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        debugger
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'Please enter both username and password.' });
        }

        const query = 'SELECT * FROM login WHERE username = $1';
        const results = await queryDatabase(query, username);

        if (results.length === 0) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.pWord);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        const restriction = await getRestriction(user.accountId);
        const token = await bcrypt.hash(user.pWord, 10);

        res.json({
            message: 'Login successful',
            token: token,
            zhas2chasT: restriction,
            auth: user.accountId,
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error', code: error.message });
    }
});

// Update login details
router.post('/bnfjvbxgdsHAngWR', async (req, res) => {
    const { hsdn2owet, username, password, confPass, passConfirm } = req.body;
    try {
        if (await verifyPassword(hsdn2owet, passConfirm)) {
            const updates = [];
            const values = [];

            if (await checkUsername(username)) {
                updates.push('username = $1');
                values.push(username);
            } else {
                return res.status(401).json({ error: 'Username already exists' });
            }

            if (confPass === password) {
                updates.push('pword = $2');
                values.push(await bcrypt.hash(password, 10));
            } else {
                return res.status(401).json({ error: 'New password does not match' });
            }

            const sql = `UPDATE login SET ${updates.join(', ')} WHERE accountid = $3`;
            await queryDatabase(sql, [...values, hsdn2owet]);
            res.send('User login details updated successfully!');
        } else {
            res.status(401).json({ error: 'Incorrect password confirmation' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update user information
router.post('/zxT10Rrshxb', async (req, res) => {
    const { hsdn2owet, fName, mName, lName, contactNum, email, profilePic, passConfirm } = req.body;
    try {
        const updates = [];
        const values = [];

        if (fName) updates.push('firstname = $1') && values.push(fName);
        if (mName) updates.push('middlename = $2') && values.push(mName);
        if (lName) updates.push('lastname = $3') && values.push(lName);
        if (contactNum) updates.push('contactnum = $4') && values.push(contactNum);
        if (email) updates.push('email = $5') && values.push(email);
        if (profilePic) updates.push('profilepic = $6') && values.push(profilePic);

        if (await verifyPassword(hsdn2owet, passConfirm)) {
            values.push(hsdn2owet);
            const sql = `UPDATE users SET ${updates.join(', ')} WHERE userid = $7`;
            await queryDatabase(sql, values);
            res.send('User information updated successfully!');
        } else {
            res.status(401).json({ error: 'Incorrect password confirmation' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Additional routes would follow a similar pattern...

//inquire customer
router.post('/hjgsahdghasgdhgdahsgdSAKNB', async (req, res) => {
    const { fname, mname, lname, contactNum, address, email, plan } = req.body;
    const userId = await genId('users', 'userId', 999999999999);
    const accountId = await genId('accounts', 'accountId', 999999999999);
    if (verifyEmail(email)) {
        if (fname === '' || mname === '' || lname === '' || contactNum === '' || address === '' || email === '') {
            return res.status(400).json({ error: 'fields must not be emmpty' })
        }
        else {
            const resp = await new Promise((resolve, reject) => {
                const query = 'INSERT INTO `users`(`userId`, `firstName`, `middleName`, `lastName`, `age`, `email`, `contactNum`, `address`, `profilePic`, `restriction`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                db.query(query, [userId, fname, mname, lname, '', email, contactNum, address, '', '25464136855'], (error, result) => {
                    if (error) {
                        return reject(error);
                    }
                    if (result) {
                        const newAccountQuery = 'INSERT INTO `accounts`(`serverConn`, `currPlan`, `accountId`, `billingDate`, `stat`, `userId`) VALUES (?,?,?,?,?,?)';
                        db.query(newAccountQuery, ['645', plan, accountId, '', '6201', userId], (error, result) => {
                            if (error) {
                                return reject(error);
                            }
                            if (result) {
                                return resolve(res.status(200).json({ message: 'Great! please wait for the confirmation that will be sent to your email' }));
                            }
                        })
                    }
                    else {

                    }
                })
            })
        }
    }
})

// Retrieve user details using the authorization token
router.post('/fgbjmndo234bnkjcslknsqewrSADqwebnSFasq', async (req, res) => {
    const { authorizationToken } = req.body;
    const query = 'SELECT * FROM users u WHERE u."userId" = $1';

    if (authorizationToken) {
        try {
            const results = await queryDatabase(query, authorizationToken);
            if (results.rows.length === 0) {
                return res.status(300).json({ error: "No results found" });
            } else {
                const buffer = results.rows[0].profilePic;
                const image = buffer.toString('base64');
                return res.status(200).json({ rawData: results.rows, image });
            }
        } catch (error) {
            return res.status(500).json({ error: "Server error", details: error });
        }
    } else {
        return res.status(400).json({ error: "No Token is Given" });
    }
});

// Get transactions
router.post('/getTransactions', async (req, res) => {
    const authorizationToken = req.body;
    const query = `
        SELECT p.paymentId, 
               CONCAT(u.firstName, ' ', u.middleName, ' ', u.lastName) AS name, 
               p.paymentDate, 
               plans.planName, 
               a.billingDate, 
               p.totalPaid, 
               p.rebate 
        FROM payments p 
        INNER JOIN accounts a ON p.accountId = a.accountId 
        INNER JOIN users u ON a.userId = u.userId 
        INNER JOIN plans ON p.plan = plans.planId
    `;

    if (authorizationToken) {
        try {
            const results = await db.query(query);
            res.json(results.rows);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ message: "Error! Authentication token not valid!" });
    }
});

// Get customer's bill records
router.post('/getCustomerBills', async (req, res) => {
    const { token, customerId } = req.body;
    const query = `
        SELECT bill.billId, 
               CONCAT(users.firstName, ' ', users.lastName) AS name, 
               plans.planName, 
               bill.stat, 
               bill.amount 
        FROM bill 
        INNER JOIN accounts ON bill.accountId = accounts.accountId 
        INNER JOIN users ON accounts.userId = users.userId 
        INNER JOIN plans ON bill.plan = plans.planId 
        WHERE bill.accountId = $1
    `;

    if (token) {
        try {
            const results = await db.query(query, [customerId]);
            res.json(results.rows);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ message: "Error! Authentication token not valid!" });
    }
});

// Get staff details
router.post('/getStaff', async (req, res) => {
    const authorizationToken = req.body;
    const query = `
        SELECT users.userId AS id, 
               CONCAT(users.firstName, ' ', users.lastName) AS name, 
               users.email, 
               users.contactNum AS contact, 
               acounttype.position 
        FROM users 
        INNER JOIN acounttype ON users.restriction = acounttype.restrictionid 
        WHERE users.restriction = 25464136865
    `;

    if (authorizationToken) {
        try {
            const results = await db.query(query);
            res.json(results.rows);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ error: "No token provided" });
    }
});

// Get plans
router.post('/getPlans', async (req, res) => {
    const authorizationToken = req.body;
    const query = 'SELECT * FROM plans';

    if (authorizationToken) {
        try {
            const results = await db.query(query);
            res.json(results.rows);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ error: "No token provided" });
    }
});

// Get customers
router.post('/getCustomers', async (req, res) => {
    const authorizationToken = req.body;
    const query = `
        SELECT accounts.accountId, 
               CONCAT(users.firstName, ' ', users.lastName) AS "fullName",  
               users.address, 
               plans.planName, 
               accounts.billingDate, 
               accounts.stat 
        FROM users 
        INNER JOIN accounts ON users.userId = accounts.userId 
        INNER JOIN plans ON accounts.currPlan = plans.planId
    `;

    if (authorizationToken) {
        try {
            const results = await db.query(query);
            res.json(results.rows);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ error: "No token provided" });
    }
});

// Function to insert login log
function insertLoginLog(userId, ipAddress, action) {
    const query = 'INSERT INTO login_logs (userId, timedate, actionTaken, ipAdd) VALUES ($1, $2, $3, $4)';
    return db.query(query, [userId, new Date(), action, ipAddress]);
}

module.exports = router;
