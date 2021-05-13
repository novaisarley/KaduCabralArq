import 'reflect-metadata';

import * as dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import { exceptionHandler } from './middlewares/GlobalExceptionHandler';

import { routes } from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(exceptionHandler);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
