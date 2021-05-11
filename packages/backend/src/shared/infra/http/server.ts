import express from 'express';
import cors from 'cors';

import '../typeorm';

import { routes } from './routes';

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());

app.use(routes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
