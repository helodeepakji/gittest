const connection = require('../database/conn');

const Transaction = {};

// 1. Create a new transaction
Transaction.create = (data, callback) => {
    const { design_id, user_id, amount, type, remarks } = data;

    // Check if a transaction with design_id and type 'credit' already exists
    const checkSql = `SELECT * FROM transactions WHERE design_id = ? AND type = 'credit'`;
    const insertSql = `
        INSERT INTO transactions 
        (design_id, user_id, amount, type, remarks, created_at) 
        VALUES (?, ?, ?, ?, ?, NOW())
    `;

    // Check for existing transaction
    connection.query(checkSql, [design_id], (checkError, checkResults) => {
        if (checkError) {
            console.error("Error checking transaction existence:", checkError.message);
            return callback(checkError, null);
        }

        // If a transaction already exists, skip the insert
        if (checkResults.length == 0) {
            const values = [design_id, user_id, amount, type, remarks];
            connection.query(insertSql, values, (insertError, insertResults) => {
                if (insertError) {
                    console.error("Error inserting transaction:", insertError.message);
                    return callback(insertError, null);
                }
                callback(null, insertResults);
            });
        }

        callback(null, checkResults);
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
    // SQL query to fetch transactions with related design details
    const sql = `
        SELECT 
            transactions.*, 
            designs.image, 
            designs.status ,
            business.caption
        FROM transactions 
        JOIN designs ON designs.id = transactions.design_id 
        JOIN business ON designs.ads_id = business.id
        WHERE transactions.user_id = ?  AND transactions.type = 'credit'
        ORDER BY transactions.created_at DESC
    `;

    // Execute the query with parameterized input
    connection.query(sql, [user_id], (error, results) => {
        if (error) {
            console.error("Error fetching transactions for user:", error.message);
            return callback(error, null);
        }

        // Return the fetched results
        callback(null, results);
    });
};

Transaction.getAllWithdrawl = (user_id, callback) => {
    // SQL query to fetch transactions with related design details
    const sql = `
        SELECT 
            transactions.*, 
            designs.image, 
            designs.status ,
            business.caption
        FROM transactions 
        JOIN designs ON designs.id = transactions.design_id 
        JOIN business ON designs.ads_id = business.id
        WHERE transactions.user_id = ?  AND transactions.type = 'debit'
        ORDER BY transactions.created_at DESC
    `;

    // Execute the query with parameterized input
    connection.query(sql, [user_id], (error, results) => {
        if (error) {
            console.error("Error fetching transactions for user:", error.message);
            return callback(error, null);
        }
        // Return the fetched results
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

Transaction.totalWithdral = (user_id, callback) => {
    const sql = `SELECT SUM(amount) as total_withral FROM transactions WHERE user_id = ? AND type = 'debit' `;

    // Execute the query
    connection.query(sql, [user_id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results[0]);
    });
};

Transaction.avaBalance = (user_id, callback) => {
    const sql = `SELECT SUM(amount) as total_withral FROM transactions WHERE user_id = ? AND type = 'debit' `;
    const sql2 = `SELECT SUM(amount) as total_withral FROM transactions WHERE user_id = ? AND type = 'credit' `;

    // Execute the query
    connection.query(sql, [user_id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        connection.query(sql2, [user_id], (error2, results2) => {
            if (error2) {
                return callback(error2, null);
            }
            callback(null, results2[0].total_withral - results[0].total_withral);
        });
    });
};

module.exports = Transaction;
