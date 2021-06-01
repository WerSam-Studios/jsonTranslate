import express from 'express';
import { jsonRoutes } from './routes/jsons.routes'

const app = express();

app.use(express.json());

app.use('/json_translate',jsonRoutes);

export { app };
