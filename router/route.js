const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const route = express.Router();
const path = require('path');
const User = require('../modal/User');
const Business = require('../modal/Business');
const Designs = require('../modal/Designs');
const RejectDesign = require('../modal/RejectDesign');
const Product = require('../modal/Product');
const Transaction = require('../modal/Transaction');
const Chat = require('../modal/Chat');
const Order = require('../modal/Order');
const JWT_SECRET = 'your_jwt_secret_key';
const axios = require('axios');

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

route.get('/getAllUser', (req, res) => {
    User.allUser((err, results) => {
        if (!err) {
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
        const token = jwt.sign({ id: user.id, email: user.email, name: user.first_name+' '+user.last_name, profile : user.profile , user_type: user.user_type }, JWT_SECRET, {
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
    const user_type = req.user.user_type;
    const caption = req.body.caption;

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'At least one file is required' });
    }

    if (user_type != 'business') {
        return res.status(400).json({ message: 'This is only for Business User' });
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

route.get('/getRequirement', authenticateToken, (req, res) => {
    const user_id = req.user.id; // Get user ID from the token
    const page = parseInt(req.query.page, 10) || 1; // Default to page 1
    const limit = parseInt(req.query.limit, 10) || 5; // Default to 5 items per page
    const offset = (page - 1) * limit;

    console.log('Fetching requirements for user:', { user_id, page, limit, offset });

    Business.getAllMediaPaginated(user_id, limit, offset, (err, results, totalCount) => {
        if (err) {
            console.error('Error fetching requirements:', err.message);
            return res.status(500).json({
                message: 'Error fetching requirements',
                error: err.message,
            });
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
route.post('/uploadDesign', authenticateToken, upload.array('media[]', 10), (req, res) => {
    const user_id = req.user.id;
    const ads_id = req.body.ads_id;
    const user_type = req.user.user_type;

    // if (user_type != 'designer') {
    //     return res.status(400).json({ message: 'This is only for Designer User' });
    // }

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'At least one file is required' });
    }

    // Map through req.files to get the file paths
    const mediaPaths = req.files.map(file => `/upload/${file.filename}`);

    // Ensure no duplicates
    const uniqueMediaPaths = [...new Set(mediaPaths)];

    Designs.uploadDesign({ ads_id, user_id, media: uniqueMediaPaths }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error uploading media', error: err.message });
        }
        res.json({ message: 'Media uploaded successfully', mediaId: result.insertId });
    });
});

route.get('/getMyDesigns', authenticateToken, (req, res) => {
    const userId = req.user.id; // Extract user ID from authenticated token
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 5; // Default to 5 items per page
    const offset = (page - 1) * limit;

    Designs.getByUserId(userId, limit, offset, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error fetching designs',
                error: err.message,
            });
        }

        const { results, totalCount } = result;

        res.json({
            page,
            limit,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            data: results,
        });
    });
});

route.get('/getAllDesigns', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const userType = req.user.user_type;
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 5; // Default to 5 items per page
    const offset = (page - 1) * limit;

    if (userType == 'designer') {
        Designs.getByUserId(userId, limit, offset, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error fetching designs',
                    error: err.message,
                });
            }

            const { results, totalCount } = result;

            res.json({
                page,
                limit,
                totalCount,
                totalPages: Math.ceil(totalCount / limit),
                data: results,
            });
        });
    } else if (userType == 'business') {
        Designs.getByBusinessUser(userId, limit, offset, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error fetching designs',
                    error: err.message,
                });
            }

            const { results, totalCount } = result;

            res.json({
                page,
                limit,
                totalCount,
                totalPages: Math.ceil(totalCount / limit),
                data: results,
            });
        });
    }
});

route.get('/getAllDesigns/:ads_id', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const ads_id = req.params.ads_id;
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 5; // Default to 5 items per page
    const offset = (page - 1) * limit;

    Designs.getByAdsId(ads_id , userId , limit, offset, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error fetching designs',
                error: err.message,
            });
        }

        const { results, totalCount } = result;

        res.json({
            page,
            limit,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            data: results,
        });
    });

});

route.get('/getDesign/:id', authenticateToken, (req, res) => {
    const id = req.params.id;
    Designs.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error fetching designs',
                error: err.message,
            });
        }

        if (!result) {
            return res.status(404).json({
                message: 'Design not found',
            });
        }

        res.status(200).json({ data: result });
    });
});

route.post('/designNotSatisfied/:id', authenticateToken, (req, res) => {
    const user_id = req.user.id;
    const design_id = req.params.id;
    const { ads_id, feedback } = req.body;
    // Validate the input
    if (!ads_id || !feedback) {
        return res.status(400).json({
            message: 'ads_id and feedback are required fields.',
        });
    }

    Designs.reject(design_id, (err, result) => {
        RejectDesign.create({ design_id, user_id, ads_id, feedback }, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error creating rejected design entry',
                    error: err.message,
                });
            }

            res.status(201).json({
                message: 'Rejected design successfully',
                data: result,
            });
        });
    });

});

route.post('/chat/send/:id', authenticateToken, (req, res) => {
    const user_id = req.user.id;
    const design_id = req.params.id;
    const { msg, receiver, media } = req.body;

    if (!msg || !receiver || !design_id) {
        return res.status(400).json({
            message: 'Invalid input data. Ensure sender, receiver, msg, and design_id are provided.',
        });
    }

    Chat.sendMessage({ user_id, receiver, msg, design_id, media }, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error sending',
                error: err.message,
            });
        }

        res.status(201).json({
            message: 'Send successfully',
            data: result,
        });
    });
});

route.get('/chat/history/:id', authenticateToken, (req, res) => {
    const design_id = req.params.id;
    console.log('Received design_id:', design_id); // Add this line

    Chat.getChatHistory(design_id, (err, result) => {
        if (err) {
            console.error('Error in getChatHistory:', err.message); // Add this line
            return res.status(500).json({
                message: 'Error sending',
                error: err.message,
            });
        }
        res.status(201).json(result);
    });
});

route.get('/products', (req, res) => {
    Product.getAllProduct((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Database query failed.' });
        }
        res.status(200).json(data);
    });
});

route.post('/selected-items', (req, res) => {
    const selectedItems = req.body.selectedItems;

    if (!selectedItems || selectedItems.length === 0) {
        return res.status(400).json({ message: "No items selected" });
    }

    // Call the model method to get selected items with their details
    Product.getSelectedItems(selectedItems, (error, detailedItems) => {
        if (error) {
            return res.status(500).json({ message: "Error fetching selected items", error });
        }

        return res.status(200).json(detailedItems);
    });
});

route.post('/booking', authenticateToken, (req, res) => {
    const user_id = req.user.id;
    const { items, order_id, design_id, amount, pay_amount, coupen } = req.body;

    Order.booking({ items, order_id, design_id, amount, pay_amount, coupen }, user_id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error creating booking',
                error: err.message,
            });
        }

        res.status(201).json({
            message: 'Booking created successfully',
            data: result,
        });
    });
});

route.post('/phonepe-payment', async (req, res) => {
    try {
        const { payload, xVerifyHeader } = req.body;
        // const url = 'https://api.phonepe.com/apis/hermes/pg/v1/pay';
        const url = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
        const response = await axios.post(
            url,
            { request: payload },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-VERIFY': xVerifyHeader,
                },
            }
        );

        res.json(response.data); // Send back PhonePe API response to the frontend
    } catch (error) {
        console.error('Error in PhonePe Payment:', error.message);
        res.status(500).json({ error: 'Payment failed', details: error.message });
    }
});

route.post('/payment-status/:order_id', async (req, res) => {
    try {
        const order_id = req.params.order_id;
        const {
            code,
            transactionId,
            amount,
        } = req.body;

        console.log('Payment Status Callback:', req.body);

        // Determine payment status
        let status = code === 'PAYMENT_SUCCESS' ? 'success' : 'failed';
        const pay_amount = parseFloat(amount) / 100;

        // Update order in the database
        Order.status(
            pay_amount,
            transactionId,
            status,
            order_id,
            (error, result) => {
                if (error) {
                    console.error('Error updating payment status:', error);
                    return res.status(500).send(`
                        <html>
                            <body>
                                <h1>Payment Failed</h1>
                                <p>We couldn't process your payment at this time. Please try again.</p>
                                <a href="/business/orders">Return to Orders</a>
                            </body>
                        </html>
                    `);
                }

                if (status === 'success') {
                    console.log('Order updated successfully, fetching design...');

                    // Fetch design details using design_id
                    Designs.getById(result.design_id, (err, designResult) => {

                        Designs.approve(result.design_id, (approveErr, approveResult) => {
                            if (approveErr) {
                                console.error('Error approving design:', approveErr);
                            }
                            console.log('Design approved successfully:', approveResult);
                        });

                        if (err) {
                            console.error('Error fetching design:', err);
                            return res.status(500).send(`
                                <html>
                                    <body>
                                        <h1>Payment Successful</h1>
                                        <p>But we encountered an issue processing further details.</p>
                                        <a href="/business/orders">Return to Orders</a>
                                    </body>
                                </html>
                            `);
                        }

                        if (designResult && designResult.designer_id && result.design_id) {
                            // Credit transaction to designer
                            Transaction.create({
                                design_id: result.design_id,
                                user_id: designResult.designer_id,
                                amount: 50, // Assuming fixed credit amount
                                type: 'credit',
                                remarks: 'Design is selected',
                            }, (tranErr, tranResult) => {
                                if (tranErr) {
                                    console.error('Error creating transaction:', tranErr);
                                    return res.status(500).send(`
                                        <html>
                                            <body>
                                                <h1>Payment Successful</h1>
                                                <p>However, an issue occurred with crediting the designer.</p>
                                                <a href="/business/orders">Return to Orders</a>
                                            </body>
                                        </html>
                                    `);
                                }

                                console.log('Transaction created successfully:', tranResult);
                                res.send(`
                                    <html>
                                        <body>
                                            <h1>Payment Successful</h1>
                                            <p>Your payment was successful. Transaction ID: ${transactionId}</p>
                                            <a href="/business/orders">View Orders</a>
                                            <script>
                                                setTimeout(() => {
                                                    window.location.href = '/business/orders';
                                                }, 5000); // Redirect after 5 seconds
                                            </script>
                                        </body>
                                    </html>
                                `);
                            });
                        } else {
                            console.error('Design details incomplete or missing.');
                            res.send(`
                                <html>
                                    <body>
                                        <h1>Payment Successful</h1>
                                        <p>But we could not process designer credit at this time.</p>
                                        <a href="/business/orders">Return to Orders</a>
                                    </body>
                                </html>
                            `);
                        }
                    });
                } else {
                    console.log('Payment status update failed:', result);
                    res.send(`
                        <html>
                            <body>
                                <h1>Payment Failed</h1>
                                <p>We couldn't process your payment. Please try again.</p>
                                <a href="/business/orders">Return to Orders</a>
                            </body>
                        </html>
                    `);
                }
            }
        );
    } catch (error) {
        console.error('Error handling payment status callback:', error);
        res.status(500).send(`
            <html>
                <body>
                    <h1>Internal Server Error</h1>
                    <p>Something went wrong. Please try again later.</p>
                    <a href="/business/orders">Return to Orders</a>
                </body>
            </html>
        `);
    }
});

route.get('/getAllOrders', authenticateToken, (req, res) => {
    const user_id = req.user.id;

    Order.getAllOrders(user_id, (error, results) => {
        if (error) {
            console.error('Error fetching orders:', error);
            return res.status(500).json({ message: 'Failed to fetch orders' });
        }

        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        res.status(200).json({
            message: 'Orders fetched successfully',
            orders: results,
        });
    });
});


route.get('/getOrder/:order_id', authenticateToken, (req, res) => {
    const user_id = req.user.id;
    const order_id = req.params.order_id;

    Order.getOrder(user_id, order_id, (error, results) => {
        if (error) {
            console.error('Error fetching orders:', error);
            return res.status(500).json({ message: 'Failed to fetch orders' });
        }

        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        res.status(200).json({
            message: 'Orders fetched successfully',
            orders: results,
        });
    });
});


route.get('/getAllTansaction', authenticateToken, (req, res) => {
    const user_id = req.user.id;

    Transaction.getAllByUser(user_id, (error, results) => {
        if (error) {
            console.error('Error fetching orders:', error);
            return res.status(500).json({ message: 'Failed to fetch Transaction' });
        }

        res.status(200).json({
            message: 'Transaction fetched successfully',
            orders: results,
        });
    });
});

route.get('/getAllWithdrawl', authenticateToken, (req, res) => {
    const user_id = req.user.id;

    Transaction.getAllWithdrawl(user_id, (error, results) => {
        if (error) {
            console.error('Error fetching orders:', error);
            return res.status(500).json({ message: 'Failed to fetch Transaction' });
        }

        res.status(200).json({
            message: 'Transaction fetched successfully',
            orders: results,
        });
    });
});

route.get('/totalWithdral', authenticateToken, (req, res) => {
    const user_id = req.user.id;

    Transaction.totalWithdral(user_id, (error, results) => {
        if (error) {
            console.error('Error fetching orders:', error);
            return res.status(500).json({ message: 'Failed to fetch Transaction' });
        }

        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No Transaction found for this user' });
        }

        res.status(200).json(results);
    });
});

route.get('/avaBalance', authenticateToken, (req, res) => {
    const user_id = req.user.id;

    Transaction.avaBalance(user_id, (error, results) => {
        if (error) {
            console.error('Error fetching orders:', error);
            return res.status(500).json({ message: 'Failed to fetch Transaction' });
        }

        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No Transaction found for this user' });
        }

        res.status(200).json(results);
    });
});


module.exports = route;