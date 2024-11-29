const connection = require('../database/conn');

const RejectDesign = {};

// Get all rejected designs
RejectDesign.getAll = (callback) => {
    connection.query('SELECT * FROM `reject_design`', (err, results) => {
        callback(err, results);
    });
};

// Create a new rejected design entry
RejectDesign.create = (rejectData, callback) => {
    const { design_id, user_id , ads_id, feedback } = rejectData;

    const insertQuery = `
        INSERT INTO \`reject_design\` 
        (\`design_id\`, \`user_id\`, \`ads_id\`, \`feedback\`) 
        VALUES (?, ?, ? , ?)
    `;

    connection.query(insertQuery, [design_id, user_id, ads_id, feedback], (err, results) => {
        if (err) {
            console.error('Error creating reject design entry:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Update feedback for a rejected design by ID
RejectDesign.updateFeedback = (id, feedback, callback) => {
    const updateQuery = `
        UPDATE \`reject_design\` 
        SET \`feedback\` = ?, \`updated_at\` = CURRENT_TIMESTAMP 
        WHERE \`id\` = ?
    `;

    connection.query(updateQuery, [feedback, id], (err, results) => {
        if (err) {
            console.error('Error updating feedback:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Find a rejected design by ID
RejectDesign.findById = (id, callback) => {
    const query = 'SELECT * FROM `reject_design` WHERE `id` = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching reject design by ID:', err.message);
            return callback(err);
        }
        if (results.length > 0) {
            callback(null, results[0]);
        } else {
            callback(null, null); // No matching entry found
        }
    });
};

// Delete a rejected design by ID
RejectDesign.deleteById = (id, callback) => {
    const deleteQuery = 'DELETE FROM `reject_design` WHERE `id` = ?';

    connection.query(deleteQuery, [id], (err, results) => {
        if (err) {
            console.error('Error deleting reject design entry:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = RejectDesign;
