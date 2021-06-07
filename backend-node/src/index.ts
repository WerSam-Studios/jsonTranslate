import express from 'express';
import cors from 'cors';
import { jsonRoutes } from './routes/jsons.routes'

const app = express();

app.use(express.json());
app.use(cors())
app.use('/json_translate',jsonRoutes);

export { app };
