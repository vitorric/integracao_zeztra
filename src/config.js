const dotenv = require('dotenv');
const path = require('path');

const env = `.env.${process.env.NODE_ENV}`;

const pathEnv = path.resolve(__dirname, '../', env);

dotenv.config({
  path: pathEnv,
});
