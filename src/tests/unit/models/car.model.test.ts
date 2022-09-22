import chai from 'chai';
import * as sinon from 'sinon';
import CarModel from '../../../models/car.model';
import { car, carMock } from '../../mocks/car';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new CarModel();

  after(()=>{
    sinon.restore();
  })

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMock);
  });

  describe('Adding a car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(car);
			expect(newCar).to.be.deep.equal(carMock);
		});
	});
});