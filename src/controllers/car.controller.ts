import { Request, Response } from 'express';
import Car from '../models/car.model';
import CarService from '../services/car.service';

class CarsController {
  private _service: CarService;
  private _model = new Car();

  constructor() {
    this._service = new CarService(this._model);
  }

  public async create(req: Request, res: Response) {
    const createdCar = await this._service.create(req.body);
    return res.status(201).json(createdCar);
  }
}

export default CarsController;