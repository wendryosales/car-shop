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

  public async findOne(req: Request, res: Response) {
    const car = await this._service.findOne(req.params.id);
    return res.status(200).json(car);
  }

  public async update(req: Request, res: Response) {
    const updatedCar = await this._service.update(req.params.id, req.body);
    return res.status(200).json(updatedCar);
  }
}

export default CarsController;