import chai from 'chai';
import * as sinon from 'sinon';
import app from '../../../app';
import CarModel from '../../../models/car.model';
import CarService from '../../../services/car.service';
import { car, carMock } from '../../mocks/car';

// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  after(()=>{
    sinon.restore();
  })

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMock);
    sinon.stub(carModel, 'read').resolves([carMock]);
    sinon.stub(carModel, 'readOne').resolves(carMock);
    sinon.stub(carModel, 'update').resolves(carMock);
    sinon.stub(carModel, 'delete').resolves(carMock);
  });

  describe('Adding a car', () => {
		it('successfully created', async () => {
			const newCar = await carService.create(car);
			expect(newCar).to.be.deep.equal(carMock);
		});

    it('failed to create', async () => {
      const chaiHttpResponse = await chai.request(app).post('/cars').send({});
      expect(chaiHttpResponse.status).to.equal(400);
    });

    it('sucess to create', async () => {
      const chaiHttpResponse = await chai.request(app).post('/cars').send(car);
      expect(chaiHttpResponse.status).to.equal(201);
    });
	});
});