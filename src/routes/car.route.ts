import { Router } from 'express';
import CarsController from '../controllers/car.controller';
import Car from '../models/car.model';
import CarService from '../services/car.service';

const route = Router();

const model = new Car();
const service = new CarService(model);
const controller = new CarsController(service);

route.post('/', (req, res) => controller.create(req, res));

route.get('/', (req, res) => controller.findAll(req, res));

route.get('/:id', (req, res) => controller.findOne(req, res));

export default route;