const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const route = require('./router/route');

app.use('/api/',route);

app.listen(port,() => {
    console.log(`App is Started at http://127.0.0.1:${port}/`)
});