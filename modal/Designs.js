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
       SELECT 
    designs.*, 
    business.caption, 
    business.media AS business_media, 
    business_user.first_name AS business_first_name, 
    business_user.last_name AS business_last_name, 
    business_user.company AS business_company, 
    business_user.id AS business_id, 
    business_user.profile AS business_profile,
    designer_user.first_name AS designer_first_name, 
    designer_user.last_name AS designer_last_name, 
    designer_user.id AS designer_id, 
    designer_user.company AS designer_company, 
    designer_user.profile AS designer_profile
FROM designs
LEFT JOIN business ON designs.ads_id = business.id
LEFT JOIN users AS business_user ON business_user.id = business.user_id 
JOIN users AS designer_user ON designer_user.id = designs.user_id
WHERE designs.id = ?;

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
        SELECT designs.*, business.caption, business.media AS business_media , users.first_name , users.company , users.last_name , users.profile
        FROM designs
        JOIN business ON designs.ads_id = business.id JOIN users ON users.id = business.user_id
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
        SELECT designs.*, business.caption, business.media AS business_media , users.first_name, users.last_name, users.profile
        FROM designs
        LEFT JOIN business ON designs.ads_id = business.id JOIN users ON users.id = designs.user_id
        WHERE business.user_id = ? OR designs.user_id = ?
        ORDER BY designs.created_at DESC
        LIMIT ? OFFSET ?;
    `;

    const countQuery = `
        SELECT COUNT(*) AS totalCount FROM designs JOIN business ON designs.ads_id = business.id WHERE business.user_id = ?`;

    connection.query(query, [userId,userId, limit, offset], (err, results) => {
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

Designs.getByAdsId = (ads_id , userId, limit, offset, callback) => {
    const query = `
        SELECT designs.*, business.caption, business.media AS business_media , users.first_name, users.last_name, users.profile
        FROM designs
        LEFT JOIN business ON designs.ads_id = business.id JOIN users ON users.id = designs.user_id
        WHERE business.user_id = ? AND designs.ads_id = ?
        ORDER BY designs.created_at DESC
        LIMIT ? OFFSET ?;
    `;

    const countQuery = `
        SELECT COUNT(*) AS totalCount FROM designs JOIN business ON designs.ads_id = business.id WHERE business.user_id = ? AND ads_id = ?`;

    connection.query(query, [userId,ads_id, limit, offset], (err, results) => {
        if (err) {
            console.error('Error fetching designs:', err.message);
            return callback(err);
        }

        connection.query(countQuery, [userId , ads_id], (countErr, countResults) => {
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

// Update a design by ID
Designs.reject = (id , callback) => {
    const query = `
        UPDATE designs 
        SET status = ? WHERE id = ?;
    `;
    connection.query(query, ['reject', id], (err, results) => {
        if (err) {
            console.error('Error updating design:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

Designs.approve = (id , callback) => {
    const query = `
        UPDATE designs 
        SET status = ? WHERE id = ?;
    `;
    connection.query(query, ['accept', id], (err, results) => {
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

