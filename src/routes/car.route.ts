import { Router } from 'express';
import CarsController from '../controllers/car.controller';

const route = Router();

const controller = new CarsController();

route.post('/', (req, res) => controller.create(req, res));

export default route;