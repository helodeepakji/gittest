const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const route = express.Router();
const path = require('path');
const User = require('../modal/User');
const Business = require('../modal/Business');
const Designs = require('../modal/Designs');
const JWT_SECRET = 'your_jwt_secret_key';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/upload')); // Set destination to public/upload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with timestamp
    }
});

const upload = multer({ storage: storage });

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from Bearer scheme

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        
        req.user = user; // Attach decoded token data to request
        next();
    });
}

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

route.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    User.findUserByEmail(email, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, email: user.email , user_type: user.user_type }, JWT_SECRET, {
            expiresIn: '1h'
        });

        res.json({ token, user_type: user.user_type });        
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

route.get('/profile', authenticateToken, (req, res) => {
    const user = req.user;
    res.json(user);
});

// business users
route.post('/uploadRequirement', authenticateToken, upload.array('media[]', 10), (req, res) => {
    const user_id = req.user.id;
    const caption = req.body.caption;

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'At least one file is required' });
    }

    // Map through req.files to get the file paths
    const mediaPaths = req.files.map(file => `/upload/${file.filename}`);
    
    // Ensure no duplicates
    const uniqueMediaPaths = [...new Set(mediaPaths)];

    // Save media information to the database
    Business.createMedia({ user_id, media: uniqueMediaPaths, caption }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error uploading media', error: err.message });
        }
        res.json({ message: 'Media uploaded successfully', mediaId: result.insertId });
    });
});

route.get('/getMyRequirement', authenticateToken, (req, res) => {
    const user_id = req.user.id;

    // Retrieve `page` and `limit` query parameters
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 5; // Default to 10 items per page

    const offset = (page - 1) * limit;

    Business.getMediaByUserIdPaginated(user_id, limit, offset, (err, results, totalCount) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching media by user ID', error: err.message });
        }

        res.json({
            page,
            limit,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            data: results,
        });
    });
});

route.get('/getRequirement', authenticateToken , (req, res) => {
    const user_id = req.user.id;
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 5; // Default to 10 items per page

    const offset = (page - 1) * limit;

    Business.getAllMediaPaginated(limit, offset, (err, results, totalCount) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching media by user ID', error: err.message });
        }

        res.json({
            page,
            limit,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            data: results,
        });
    });
});

// upload designs
route.post('/uploadDesign', authenticateToken , upload.array('media[]', 10) , (req, res) => {
    const user_id = req.user.id;
    const ads_id = req.body.ads_id;
   
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'At least one file is required' });
    }

     // Map through req.files to get the file paths
    const mediaPaths = req.files.map(file => `/upload/${file.filename}`);
    
     // Ensure no duplicates
    const uniqueMediaPaths = [...new Set(mediaPaths)];

    Designs.uploadDesign( {ads_id, user_id , media: uniqueMediaPaths},(err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error uploading media', error: err.message });
        }
        res.json({ message: 'Media uploaded successfully', mediaId: result.insertId });
    });
});


module.exports = route;