import chai from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import CarsController from '../../../controllers/car.controller';
import Car from '../../../models/car.model';
import CarService from '../../../services/car.service';
import { car, carMock } from '../../mocks/car';

const { expect } = chai;

describe('Car Controller', () => {
  const model = new Car();
  const service = new CarService(model);
  const controller = new CarsController(service);
  const req = {} as Request;
  const res = {} as Response;

  after(()=>{
    sinon.restore();
  })

  before(() => {
    service.create = sinon.stub().resolves(carMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
  });

  describe('Adding a car', () => {
		it('successfully created', async () => {
      req.body = car;
      await controller.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
		});
	});
});