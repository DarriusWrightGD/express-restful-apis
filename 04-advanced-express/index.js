const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const logger = require('./logger');

app.use(express.json());

// Middleware is called in sequence...
app.use(logger);

app.get('/ping', (req,res)=>res.send('pong'));

app.listen(port, ()=> console.log(`Listening on the port ${port}`));