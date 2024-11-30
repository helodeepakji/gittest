const connection = require('../database/conn');

const Chat = {};

// Send a new chat message
Chat.sendMessage = (data, callback) => {
    const { user_id, receiver, msg, design_id, media } = data;
    if (!user_id || !receiver || !msg || !design_id) {
        return callback(new Error('Missing required fields'));
    }

    const query = 'INSERT INTO chat (sender, receiver, msg, design_id, media) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [user_id, receiver, msg, design_id, media || ''], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

// Get chat history for a specific design
Chat.getChatHistory = (design_id, callback) => {
    const query = `
        SELECT * FROM chat 
        WHERE design_id = ?
        ORDER BY created_at ASC;
    `;
    connection.query(query, [design_id], (err, results) => {
        if (err) {
            console.error('Error fetching chat history:', err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = Chat;
