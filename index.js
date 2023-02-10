const dotenv = require('dotenv');
dotenv.config();
const conn = require('./config/database');
const express = require('express');
const app = express();
app.use(express.json());

const empRouter = require('./api/emplyee/emp.router');

app.use('/api/emp', empRouter);

var server = app.listen(process.env.APP_PORT, () => {
    var port = server.address().port;
    console.log('Server Run at port: ' + port);
});
