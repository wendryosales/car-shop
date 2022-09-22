import GenericError from '../error/generic.error';
import { carSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
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
}