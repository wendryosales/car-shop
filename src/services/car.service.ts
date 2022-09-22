import GenericError from '../error/generic.error';
import { carSchema, ICar } from '../interfaces/ICar';
import Car from '../models/car.model';

export default class CarService {
  private _car: Car;

  constructor(model: Car) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    
    if (!parsed.success) {
      throw new GenericError('Bad Request', 400);
    }
    const createdCar = await this._car.create(parsed.data);
    return createdCar;
  }

  public async findAll(): Promise<ICar[]> {
    const cars = await this._car.read();
    return cars || [];
  }
}