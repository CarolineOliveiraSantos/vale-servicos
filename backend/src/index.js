import express, { json } from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
const app = express();

app.use(cors());
app.use(json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/uploadsServs', express.static(path.resolve(__dirname, 'uploads')));

app.listen(3333);
