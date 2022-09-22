import express from 'express';
import 'express-async-errors';
import ErrorHandling from './error/errorHandling';
import carRouter from './routes/car.route';

const app = express();

app.use(express.json());

const errorHandling = new ErrorHandling();

app.use('/cars', carRouter);

app.use(errorHandling.middleware);

export default app;
