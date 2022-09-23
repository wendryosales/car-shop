import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import GenericError from '../error/generic.error';
import { IModel } from '../interfaces/IModel';

class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[] | null> {
    return this._model.find({});
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) {
      throw new GenericError('Id must have 24 hexadecimal characters', 400);
    }
    return this._model.findById(_id);
  }

  public async update(_id: string, obj: T): Promise<T | null> {
    return this._model.findByIdAndUpdate(_id, { ...obj } as UpdateQuery<T>);
  }

  public async delete(_id: string): Promise<T | null> {
    return this._model.findByIdAndDelete(_id);
  }
}

export default MongoModel;