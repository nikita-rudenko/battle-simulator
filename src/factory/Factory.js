import Soldier from '../models/Soldier';
import Vehicle from '../models/Vehicle';
import Squad from '../models/Squad';
import Army from '../models/Army';

let instance = null;
export class Factory {
  constructor() {
    if (instance) {
      return instance;
    } else {
      instance = this;
    }
  }

  static getInstance() {
    return new Factory();
  }

  createSoldier = data => new Soldier(data.health, data.recharge);

  createSoldiers = arr => arr.map(soldier => this.createSoldier(soldier));

  createVehicle = data =>
    new Vehicle(
      data.health,
      data.recharge,
      this.createSoldiers(data.operators)
    );

  createVehicles = arr => arr.map(vehicle => this.createVehicle(vehicle));

  createSquad(data) {
    const { type, units } = data;
    switch (type) {
      case 'soldiers':
        const soldiers = this.createSoldiers(units);
        return new Squad(type, soldiers);
      case 'vehicles':
        const vehicles = this.createVehicles(units);
        return new Squad(type, vehicles);
      default:
        return;
    }
  }

  createSquads = arr => arr.map(squad => this.createSquad(squad));

  createArmy = data =>
    new Army(this.createSquads(data.squads), data.strategy, data.name);

  createArmies = arr => arr.map(army => this.createArmy(army));
}
