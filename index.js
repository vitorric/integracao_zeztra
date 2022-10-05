require('./src/config');

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(
    morgan('dev'),
    express.json({ limit: '1000MB' }),
    express.urlencoded({ limit: '2000MB', extended: true }),
);

app.listen(process.env.PORT, () => {
    console.log('Server running on port %d', process.env.PORT);
});
