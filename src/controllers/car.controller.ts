import { Request, Response } from 'express';
import CarService from '../services/car.service';

class CarsController {
  private _service: CarService;

  constructor(service: CarService) {
    this._service = service;
  }

  public async create(req: Request, res: Response) {
    const createdCar = await this._service.create(req.body);
    return res.status(201).json(createdCar);
  }
}

export default CarsController;