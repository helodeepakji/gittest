const connection = require('../database/conn');

const User = {};

// get all user data
User.allUser = (callback) => {
    connection.query('SELECT * FROM `users`', (err, results, fields) => {
        callback(err, results);
    });
};


// Create a new user with duplicate email check
User.createUser = (userData, callback) => {
    const { first_name, last_name, email, phone, password, user_type } = userData;
    
    // Check if user with the same email already exists
    const checkQuery = 'SELECT * FROM `users` WHERE `email` = ?';
    connection.query(checkQuery, [email], (checkErr, checkResults) => {
        if (checkErr) {
            console.error('Error checking for existing user:', checkErr.message);
            return callback(checkErr);
        }
        
        if (checkResults.length > 0) {
            // User already exists
            return callback(new Error('User with this email already exists'));
        }
        
        // If user does not exist, proceed with insertion
        const insertQuery = 'INSERT INTO `users` (`first_name`, `last_name`, `email`, `phone`, `password`, `user_type`) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(insertQuery, [first_name, last_name, email, phone, password, user_type], (insertErr, insertResults) => {
            if (insertErr) {
                console.error('Error creating user:', insertErr.message);
                return callback(insertErr);
            }
            callback(null, insertResults);
        });
    });
};


// Update an existing user
User.updateUser = (id, userData, callback) => {
    const { first_name, last_name, email, phone, password, user_type } = userData;
    const query = 'UPDATE `users` SET `first_name` = ?, `last_name` = ?, `email` = ?, `phone` = ?, `password` = ?, `user_type` = ? WHERE `id` = ?';
    
    connection.query(query, [first_name, last_name, email, phone, password, user_type, id], (err, results) => {
        if (err) {
            console.error('Error updating user:', err.message);
        }
        callback(err, results);
    });
};

// Delete a user by ID
User.deleteUser = (id, callback) => {
    const query = 'DELETE FROM `users` WHERE `id` = ?';
    
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err.message);
        }
        callback(err, results);
    });
};


User.findUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM `users` WHERE `email` = ?';
    
    connection.query(query, [email], (err, results) => {
        if (err) {
            console.error('No user found:', err.message);
            return callback(err);
        }
        if (results.length > 0) {
            callback(null, results[0]);
        } else {
            callback(null, null); // No matching user found
        }
    });
};


User.findById = (id, callback) => {
    const query = 'SELECT * FROM `users` WHERE `id` = ?';
    
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('No user found:', err.message);
            return callback(err);
        }
        if (results.length > 0) {
            callback(null, results[0]);
        } else {
            callback(null, null); // No matching user found
        }
    });
};

module.exports = User;