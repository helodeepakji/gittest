const connection = require('../database/conn');

const Business = {};

// Fetch all media records
Business.getAllMedia = (callback) => {
    const query = 'SELECT * FROM `business` ORDER BY `business`.`created_at` DESC';
    connection.query(query, (err, results) => {
        callback(err, results);
    });
};

// Fetch media records by user ID
Business.getMediaByUserId = (userId, callback) => {
    const query = 'SELECT * FROM `business` WHERE `user_id` = ? ORDER BY `business`.`created_at` DESC';
    connection.query(query, userId, (err, results) => {
        if (err) {
            console.error('Error fetching media by user ID:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

Business.getMediaByUserIdPaginated = (userId, limit, offset, callback) => {
    const query = `
        SELECT * 
        FROM business 
        WHERE user_id = ? 
        ORDER BY created_at DESC 
        LIMIT ? OFFSET ?;
    `;
    const countQuery = `
        SELECT COUNT(*) AS totalCount 
        FROM business 
        WHERE user_id = ?;
    `;

    connection.query(query, [userId, limit, offset], (err, results) => {
        if (err) {
            console.error('Error fetching media by user ID:', err.message);
            return callback(err);
        }

        connection.query(countQuery, [userId], (countErr, countResults) => {
            if (countErr) {
                console.error('Error fetching media count by user ID:', countErr.message);
                return callback(countErr);
            }

            const totalCount = countResults[0].totalCount;
            callback(null, results, totalCount);
        });
    });
};


// Upload new media record
Business.createMedia = (mediaData, callback) => {
    const { user_id, media, caption } = mediaData;

    const insertQuery = 'INSERT INTO `business` (`user_id`, `media`, `caption`) VALUES (?, ?, ?)';
    connection.query(insertQuery, [user_id, JSON.stringify(media), caption], (err, result) => {
        if (err) {
            console.error('Error uploading media:', err.message);
            return callback(err);
        }
        callback(null, result);
    });
};

// Update an existing media record by ID
Business.updateMedia = (id, mediaData, callback) => {
    const { media, caption } = mediaData;
    const query = 'UPDATE `business` SET `media` = ?, `caption` = ? WHERE `id` = ?';

    connection.query(query, [JSON.stringify(media), caption, id], (err, results) => {
        if (err) {
            console.error('Error updating media:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Delete media record by ID
Business.deleteMedia = (id, callback) => {
    const query = 'DELETE FROM `business` WHERE `id` = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting media:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = Business;
