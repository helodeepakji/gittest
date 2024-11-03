const connection = require('../database/conn');

const User = {};

// get all user data
User.allUser = (callback) => {
    connection.query('SELECT * FROM `users`', (err, results, fields) => {
        callback(err, results);
    });
};

// Create a new user
User.createUser = (userData, callback) => {
    const { first_name, last_name, email, phone, password, user_type } = userData;
    const query = 'INSERT INTO `users` (`first_name`, `last_name`, `email`, `phone`, `password`, `user_type`) VALUES (?, ?, ?, ?, ?, ?)';
    
    connection.query(query, [first_name, last_name, email, phone, password, user_type], (err, results) => {
        if (err) {
            console.error('Error creating user:', err.message);
        }
        callback(err, results);
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

module.exports = User;