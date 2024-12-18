const connection = require('../database/conn');

const Orders = {};

Orders.booking = (data, user_id, callback) => {
    const { items, order_id, design_id, amount, pay_amount, coupen } = data;

    const sql = `
        INSERT INTO orders 
        (item, order_id, design_id, user_id, amount, pay_amount, coupen, created_at, updated_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    // Convert `items` array to JSON string
    const itemJson = JSON.stringify(items);

    // Parameters for the query
    const values = [itemJson, order_id, design_id, user_id, amount, pay_amount, coupen];

    // Execute the query
    connection.query(sql, values, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

Orders.status = (amount, transaction_id, status, order_id, callback) => {
    // Step 1: Check if the order exists before updating
    const checkSql = `SELECT * FROM orders WHERE order_id = ? LIMIT 1`;

    connection.query(checkSql, [order_id], (checkError, checkResults) => {
        if (checkError) {
            return callback(checkError, null);
        }

        // If no order is found
        if (checkResults.length === 0) {
            return callback(new Error(`Order with ID ${order_id} not found`), null);
        }

        // Step 2: Proceed to update the order if it exists
        const updateSql = `
            UPDATE orders 
            SET pay_amount = ?, status = ?, transaction_id = ?, updated_at = NOW() 
            WHERE order_id = ?
        `;

        const values = [amount, status, transaction_id, order_id];

        connection.query(updateSql, values, (updateError, updateResults) => {
            if (updateError) {
                return callback(updateError, null);
            }

            callback(null, checkResults[0]);
        });
    });
};


Orders.getAllOrders = (user_id,callback) => {
    const sql = `SELECT * FROM orders WHERE user_id = ? ORDER BY orders.created_at DESC`;
    connection.query(sql, user_id, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

Orders.getOrder = (user_id , order_id ,callback) => {
    const sql = `SELECT orders.* , users.first_name , users.last_name , users.email  FROM orders JOIN users ON orders.user_id = users.id WHERE user_id = ? AND order_id = ? ORDER BY orders.created_at DESC`;
    connection.query(sql, [user_id , order_id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results[0]);
    });
};

module.exports = Orders;
