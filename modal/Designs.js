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

Designs.getAllPaginated = (limit, offset, callback) => {
    const query = `
        SELECT * 
        FROM designs 
        ORDER BY created_at DESC 
        LIMIT ? OFFSET ?;
    `;
    const countQuery = `
        SELECT COUNT(*) AS totalCount 
        FROM designs;
    `;

    connection.query(query, [limit, offset], (err, results) => {
        if (err) {
            console.error('Error fetching designs:', err.message);
            return callback(err);
        }

        connection.query(countQuery, (countErr, countResults) => {
            if (countErr) {
                console.error('Error fetching total count of designs:', countErr.message);
                return callback(countErr);
            }

            const totalCount = countResults[0].totalCount;
            callback(null, { results, totalCount });
        });
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

