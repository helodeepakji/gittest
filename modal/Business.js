const connection = require('../database/conn');

const Business = {};

// Fetch all media records
Business.getAllMedia = (callback) => {
    const query = 'SELECT * FROM `media_table`';
    connection.query(query, (err, results) => {
        callback(err, results);
    });
};

// Fetch media records by user ID
Business.getMediaByUserId = (userId, callback) => {
    const query = 'SELECT * FROM `media_table` WHERE `user_id` = ?';
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching media by user ID:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Upload new media record
Business.createMedia = (mediaData, callback) => {
    const { user_id, media, caption } = mediaData;

    const insertQuery = 'INSERT INTO `media_table` (`user_id`, `media`, `caption`) VALUES (?, ?, ?)';
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
    const query = 'UPDATE `media_table` SET `media` = ?, `caption` = ? WHERE `id` = ?';

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
    const query = 'DELETE FROM `media_table` WHERE `id` = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting media:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = Business;