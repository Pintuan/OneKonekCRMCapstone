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
    if (params != null) {
        return new Promise((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.rows);
            });
        });
    }
    else {
        return new Promise((resolve, reject) => {
            pool.query(query, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.rows);
            });
        });
    }
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
            SELECT u.user_id, accType.position 
            FROM users u 
            INNER JOIN acounttype accType 
            ON u.restriction = accType."restrictionId"
            WHERE u.user_id = $1
        `;
        const results = await queryDatabase(query, [accountId]);

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
        const results = await queryDatabase(query, [username]);

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
router.post('/updateLoginDetails', async (req, res) => {
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
            await queryDatabase(sql, [values, hsdn2owet]);
            res.send('User login details updated successfully!');
        } else {
            res.status(401).json({ error: 'Incorrect password confirmation' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update user information
router.post('/updateUserInfo', async (req, res) => {
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
//inquire customer
router.post('/hjgsahdghasgdhgdahsgdSAKNB', async (req, res) => {
    debugger;
    let x;
    const { fname, mname, lname, contactNum, address, email, birthday, mothersMaidenName, plan } = req.body;
    const userId = await genId('users', 'user_id', 999999999999);
    const accountId = await genId('accounts', 'account_id', 999999999999);
    if (verifyEmail(email)) {
        if (fname === '' || mname === '' || lname === '' || contactNum === '' || address === '' || email === '') {
            return res.status(400).json({ error: 'fields must not be emmpty' })
        }
        else {
            const query = `
                INSERT INTO public.users(
	                user_id, "firstName", "middleName", "lastName", age, email, "contactNum", address, "profilePic", restriction, birthdate, mothers_maiden_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`;
            x = await queryDatabase(query, [userId, fname, mname, lname, 0, email, contactNum, address, '', 25464136855, birthday, mothersMaidenName]);
            if (x) {
                const newAccountQuery = `INSERT INTO public.accounts(
	            "serverConn", "currPlan", account_id, "billingDate", stat, "userId") VALUES ($1,$2,$3,$4,$5,$6)`;
                x = await queryDatabase(newAccountQuery, [null, plan, accountId, null, 6201, userId]);
                if (x) {
                    return res.status(200).send({ message: 'Success! we will send a confirmation message through your email address about your account status' });
                }
                else {
                    return res.status(301).send({ message: x });;
                }
            }
        }
    }
})

// Retrieve user details using the authorization token
router.post('/fgbjmndo234bnkjcslknsqewrSADqwebnSFasq', async (req, res) => {
    const { authorizationToken } = req.body;
    const query = 'SELECT * FROM users u WHERE u.user_id = $1';

    if (authorizationToken) {
        try {
            const results = await queryDatabase(query, [authorizationToken]);
            console.log(results);
            if (results == null) {
                return res.status(300).json({ error: "No results found" });
            } else {
                const buffer = results[0].profilePic;
                const image = buffer.toString('base64');
                return res.status(200).json({ rawData: results, image });
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
        SELECT p."paymentId", 
               CONCAT(u."firstName", ' ', u."middleName", ' ', u."lastName") AS name, 
               p."paymentDate", 
               plans."planName", 
               a."billingDate", 
               p."totalPaid", 
               p."rebate" 
        FROM payments p 
        INNER JOIN accounts a ON p."accountId" = a.account_id 
        INNER JOIN users u ON a."userId" = u.user_id 
        INNER JOIN plans ON p."plan" = plans."planId"
    `;

    if (authorizationToken) {
        try {
            const results = await queryDatabase(query);
            res.json(results);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ message: "Error! Authentication token not valid!" });
    }
});

// Get customer's bill records
router.post('/getCustomerBills', async (req, res) => {
    const { authorizationToken, customerId } = req.body;
    const query = `
        SELECT bill."billId", 
               CONCAT(users."firstName", ' ', users."lastName") AS name, 
               plans."planName", 
               bill."stat", 
               bill."amount"
        FROM bill 
        INNER JOIN accounts ON bill."accountId" = accounts.account_id 
        INNER JOIN users ON accounts.user_id = users.user_id 
        INNER JOIN plans ON bill."plan" = plans."planId" 
        WHERE bill."accountId" = $1
    `;

    if (authorizationToken) {
        try {
            const results = await queryDatabase(query, [customerId]);
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
        SELECT users.user_id AS id, 
               CONCAT(users."firstName", ' ', users."lastName") AS name, 
               users."email", 
               users."contactNum" AS contact, 
               acounttype."position"
        FROM users 
        INNER JOIN acounttype ON users."restriction" = acounttype."restrictionId"
        WHERE users."restriction" = 25464136865
    `;

    if (authorizationToken) {
        try {
            const results = await queryDatabase(query);
            res.json(results);
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
            const results = await queryDatabase(query);
            res.json(results);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ error: "No token provided" });
    }
});
router.post('/getPositions', async (req, res) => {
    const authorizationToken = req.body;
    const query = 'select * from acounttype where acounttype."restrictionId" != 25464136845  and acounttype."restrictionId" != 25464136855';

    if (authorizationToken) {
        try {
            const results = await queryDatabase(query);
            res.json(results);
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
        SELECT accounts.account_id, 
               CONCAT(users."firstName", ' ', users."lastName") AS "fullName",  
               users."address", 
               plans."planName", 
               accounts."billingDate", 
               accounts."stat" 
        FROM users 
        INNER JOIN accounts ON users.user_id = accounts."userId" 
        INNER JOIN plans ON accounts."currPlan" = plans."planId"
    `;

    if (authorizationToken) {
        try {
            const results = await queryDatabase(query);
            res.json(results);
        } catch (error) {
            return res.status(400).json({ error });
        }
    } else {
        return res.status(400).json({ error: "No token provided" });
    }
});
router.get('/', function (req, res) {
    const token = req.params.token;
    if (token) {
        res.json({ message: 'Authenticated' });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

// Function to insert login log
function insertLoginLog(userId, ipAddress, action) {
    const query = 'INSERT INTO login_logs (userId, timedate, actionTaken, ipAdd) VALUES ($1, $2, $3, $4)';
    return db.query(query, [userId, new Date(), action, ipAddress]);
}

module.exports = router;
