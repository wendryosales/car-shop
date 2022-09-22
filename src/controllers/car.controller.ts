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

  public async findAll(req: Request, res: Response) {
    const cars = await this._service.findAll();
    return res.status(200).json(cars);
  }
}

export default CarsController;