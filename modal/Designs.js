const connection = require('../database/conn');

const Designs = {};

// Upload new media record
Designs.uploadDesign = (mediaData, callback) => {
    const { ads_id, user_id, media } = mediaData;

    if (!ads_id || !user_id || !media || media.length === 0) {
        const error = new Error('Invalid input data. Ensure ads_id, user_id, and media are provided.');
        console.error('Error uploading media:', error.message);
        return callback(error);
    }

    const insertQuery = 'INSERT INTO designs (ads_id, user_id, image) VALUES (?, ?, ?)';
    connection.query(insertQuery, [ads_id, user_id, JSON.stringify(media)], (err, result) => {
        if (err) {
            console.error('Error uploading media:', err.message);
            return callback(err);
        }
        callback(null, result);
    });
};

// Get a design by ID
Designs.getById = (id, callback) => {
    const query = `
        SELECT * 
        FROM designs 
        WHERE id = ?;
    `;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching design by ID:', err.message);
            return callback(err);
        }
        callback(null, results[0]);
    });
};

// Get a design by UserID
Designs.getByUserId = (userId, limit, offset, callback) => {
    const query = `
        SELECT designs.*, business.caption, business.media AS business_media
        FROM designs
        JOIN business ON designs.ads_id = business.id
        WHERE designs.user_id = ?
        ORDER BY designs.created_at DESC
        LIMIT ? OFFSET ?;
    `;

    const countQuery = `
        SELECT COUNT(*) AS totalCount
        FROM designs
        WHERE designs.user_id = ?;
    `;

    connection.query(query, [userId, limit, offset], (err, results) => {
        if (err) {
            console.error('Error fetching designs:', err.message);
            return callback(err);
        }

        connection.query(countQuery, [userId], (countErr, countResults) => {
            if (countErr) {
                console.error('Error fetching design count:', countErr.message);
                return callback(countErr);
            }

            const totalCount = countResults[0].totalCount;
            callback(null, { results, totalCount });
        });
    });
};

// Get a design by business ID
Designs.getByBusinessUser = (userId, limit, offset, callback) => {
    const query = `
        SELECT designs.*, business.caption, business.media AS business_media
        FROM designs
        JOIN business ON designs.ads_id = business.id
        WHERE business.user_id = ?
        ORDER BY designs.created_at DESC
        LIMIT ? OFFSET ?;
    `;

    const countQuery = `
        SELECT COUNT(*) AS totalCount FROM designs JOIN business ON designs.ads_id = business.id WHERE business.user_id = ?`;

    connection.query(query, [userId, limit, offset], (err, results) => {
        if (err) {
            console.error('Error fetching designs:', err.message);
            return callback(err);
        }

        connection.query(countQuery, [userId], (countErr, countResults) => {
            if (countErr) {
                console.error('Error fetching design count:', countErr.message);
                return callback(countErr);
            }

            const totalCount = countResults[0].totalCount;
            callback(null, { results, totalCount });
        });
    });
};

// Update a design by ID
Designs.update = (id, adsId, userId, images, callback) => {
    const query = `
        UPDATE designs 
        SET ads_id = ?, user_id = ?, image = ? 
        WHERE id = ?;
    `;
    connection.query(query, [adsId, userId, JSON.stringify(images), id], (err, results) => {
        if (err) {
            console.error('Error updating design:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Delete a design by ID
Designs.delete = (id, callback) => {
    const query = `
        DELETE FROM designs 
        WHERE id = ?;
    `;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting design:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = Designs;

