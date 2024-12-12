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

Orders.status = (amount, transaction_id, status, order_id,callback) => {
    const sql = `
        UPDATE orders 
        SET pay_amount = ?, status = ?, transaction_id = ?, updated_at = NOW() 
        WHERE order_id = ?`;

    // Parameters for the query
    const values = [amount, status, transaction_id, order_id];

    // Execute the query
    connection.query(sql, values, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

module.exports = Orders;
