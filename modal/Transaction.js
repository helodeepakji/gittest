const connection = require('../database/conn');

const Transaction = {};

// 1. Create a new transaction
Transaction.create = (data, callback) => {
    const { design_id, user_id, amount, type, remarks } = data;

    const sql = `
        INSERT INTO transactions 
        (design_id, user_id, amount, type, remarks, created_at) 
        VALUES (?, ?, ?, ?, ?, NOW())
    `;

    // Parameters for the query
    const values = [design_id, user_id, amount, type, remarks];

    // Execute the query
    connection.query(sql, values, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

// 2. Update transaction type and remarks
Transaction.update = (id, type, remarks, callback) => {
    const sql = `
        UPDATE transactions 
        SET type = ?, remarks = ?, updated_at = NOW() 
        WHERE id = ?
    `;

    // Parameters for the query
    const values = [type, remarks, id];

    // Execute the query
    connection.query(sql, values, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

// 3. Get all transactions for a specific user
Transaction.getAllByUser = (user_id, callback) => {
    const sql = `
        SELECT * FROM transactions 
        WHERE user_id = ? 
        ORDER BY created_at DESC
    `;

    // Execute the query
    connection.query(sql, [user_id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

// 4. Get a single transaction by ID
Transaction.getById = (id, callback) => {
    const sql = `
        SELECT * FROM transactions 
        WHERE id = ?
    `;

    // Execute the query
    connection.query(sql, [id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

// 5. Delete a transaction by ID
Transaction.delete = (id, callback) => {
    const sql = `
        DELETE FROM transactions 
        WHERE id = ?
    `;

    // Execute the query
    connection.query(sql, [id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

module.exports = Transaction;
