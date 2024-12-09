const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const route = require('./router/route');


// Enable CORS
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve API routes
app.use('/api', route);

// Serve React static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

app.use('/upload', express.static(path.join(__dirname, 'public/upload')));

// Catch-all for any other route and send `index.html` to support client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`App is Started at http://127.0.0.1:${port}/`);
});
