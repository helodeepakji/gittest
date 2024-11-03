const express = require('express');
const route = express.Router();
const User = require('../modal/User');

route.get('/getAllUser',(req,res) => {
    User.allUser((err,results)=>{
        if(!err){
            res.json(results);
        }
    });
});


// Route to create a new user
route.post('/createUser', (req, res) => {
    const userData = req.body;
    User.createUser(userData, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating user', error: err.message });
        }
        res.status(201).json({ message: 'User created successfully', userId: results.insertId });
    });
});

// Route to update a user by ID
route.put('/updateUser/:id', (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    User.updateUser(userId, userData, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating user', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    });
});

// Route to delete a user by ID
route.delete('/deleteUser/:id', (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting user', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    });
});


module.exports = route;