import { config } from 'dotenv';
import { resolve } from 'path';

const env = `.env.${process.env.NODE_ENV}`;

const pathEnv = resolve(__dirname, '../../', env);

config({
  path: pathEnv,
});
