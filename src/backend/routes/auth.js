const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db'); // Import database connection
const { resolve } = require('chart.js/helpers');
const { listItemSecondaryActionClasses } = require('@mui/material');
const { json } = require('react-router-dom');
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
function checkUsername(username) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM login where login.username ?';
        db.query(query, [username], (err, results) => {
            if (err) {
                return reject(err); // Reject the promise on database error
            }

            if (results.length === 0) {
                resolve(true);
            }
            else {
                return reject(false);
            }
        });
    });
}
function verifyPassword(accountId, password) {
    return new Promise((resolve, reject) => {
        const query = "select * from login where accountId = ?";
        db.query(query, [accountId], (err, results) => {
            if (err) {
                return reject(err);
            }
            if (results != 0) {
                user = results[0];
                return resolve(bcrypt.compare(password, user.pWord));
            }
            else {
                return reject('no user Found');
            }
        });
    })
}
function verifyEmail(email) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users where email=?';
        db.query(query, [email], (error, results) => {
            if (error) {
                return reject(error);
            }
            if (results.lenght === 0) {
                return resolve(true);
            }
            else {
                return resolve(false);
            }
        })
    })

}
const genId = async (table, field, length) => {
    let isUnique = false;
    let id = 0;
    while (!isUnique) {
        const query = 'select * FROM ' + table + ' where ' + field + ' = ?';
        const results = await new Promise((resolve, reject) => {
            id = Math.floor(Math.random() * length);
            db.query(query, [id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        if (results.length === 0) {
            isUnique = true;
        }
        else {
            isUnique = false;
        }
    }
    return id;
}
router.post('/redirect', async (req, res) => {
    try {
        const { data } = req.body;
        const admin = await bcrypt.compare('Admin', data);
        const staff = await bcrypt.compare('Staff', data);
        if (admin) {
            return res.json({ path: "/Admin" });
        }
        if (staff) {
            return res.json({ path: "/Staff" });
        }
    } catch (error) {
        return res.status(400).json({ code: error.data })
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
        res.json({ message: 'Login successful', token: token, zhas2chasT: restriction, auth: user.accountId });
    } catch (error) {
        res.json({ error: 'Server error', code: error });
    }
});
// update login details for users
router.post('/bnfjvbxgdsHAngWR', async (req, res) => {
    const {
        hsdn2owet,
        username,
        password,
        confPass,
        passConfirm
    } = req.body;
    const updates = [];
    const values = [];
    if (await verifyPassword(hsdn2owet, passConfirm)) {
        if (await checkUsername(username)) {
            updates.push('username = ?');
            values.push(fName);
        }
        else {
            return res.status(401).json({ error: 'Username already exists' });
        }
        if (confPass === password) {
            updates.push('pWord =?');
            values.push(password);
        }
        else {
            return res.status(401).json({ error: "new password doesnt match" });
        }
    }
    else {
        return res.status(401).json({ error: "Incorrect password confirmation" });
    }

})
//update user information from settings
router.post('/zxT10Rrshxb', async (req, res) => {
    const {
        hsdn2owet,
        fName,
        mName,
        lName,
        contactNum,
        email,
        profilePic,
        passConfirm
    } = req.body;

    // Build the SQL update query dynamically
    const updates = [];
    const values = [];

    if (fName) {
        updates.push('firstName = ?');
        values.push(fName);
    }
    if (mName) {
        updates.push('middleName = ?');
        values.push(mName);
    }
    if (lName) {
        updates.push('lastName = ?');
        values.push(lName);
    }
    if (contactNum) {
        updates.push('contactNum = ?');
        values.push(contactNum);
    }
    if (email) {
        updates.push('email = ?');
        values.push(email);
    }
    if (profilePic) {
        updates.push('profilePic = ?');
        values.push(profilePic);
    }
    if (await verifyPassword(hsdn2owet, passConfirm)) {

        values.push(hsdn2owet);
    }
    else {
        return res.status(401).json({ error: "Incorrect password confirmation" });
    }

    const sql = `UPDATE users SET ${updates.join(', ')} WHERE userId = ?`;
    const results = await new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                return res.json(err);
            }
            res.send('User updated successfully!');
        });
    });
    return results;
});
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


router.post('/fgbjmndo234bnkjcslknsqewrSADqwebnSFasq', async (req, res) => {
    const { authorizationToken } = req.body;
    const query = "SELECT * from users where users.userId = ?";
    if (authorizationToken != null) {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [authorizationToken], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
        if (results === 0) {
            return res.status(300).json({ error: "no results found" });
        }
        else {
            const buffer = results[0].profilePic;
            const image = buffer.toString('base64');
            return res.status(200).json({ rawData: results, image: image });
        }
    }
    else {
        return res.status(400).json({ error: "No Token is Given" });
    }


});
//getTransactions
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

//getCustomer's Bill Records
router.post('/getCustomerBills', async (req, res) => {
    const { token, customerId } = req.body;
    const query = "SELECT bill.billId, concat(users.firstName, ' ', users.lastName) as name, plans.planName, bill.stat, bill.amount " +
        "FROM bill " +
        "INNER JOIN accounts on bill.accountId = accounts.accountId " +
        "INNER JOIN users on accounts.userId = users.userId " +
        "INNER JOIN plans on bill.plan = plans.planId where bill.accountId = ?";
    if (token != null) {
        db.query(query, [customerId], (error, results) => {
            if (error) {
                return res.status(400).json({ error: error })
            }
            res.json(results)
        })
    }
    else {
        res.status(400).json({ message: "error! authentication token not valid!" });
    }

})
router.post('/getStaff', async (req, res) => {
    const authorizationToken = req.body;
    const query = "SELECT users.userId as id,CONCAT(users.firstName,' ',users.lastName) as name, users.email,users.contactNum as contact, acounttype.position FROM users " +
        "INNER JOIN acounttype on users.restriction = acounttype.restrictionid " +
        "WHERE users.restriction = 25464136865";
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
router.post('/getCustomers', async (req, res) => {
    const authorizationToken = req.body;
    const query = "select accounts.accountId, concat(users.firstName, ' ', users.lastName) as 'fullName',  users.address, plans.planName, accounts.billingDate, accounts.stat from users "
        + "INNER JOIN accounts on users.userId = accounts.userId "
        + "INNER JOIN plans on accounts.currPlan = plans.planId";
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
