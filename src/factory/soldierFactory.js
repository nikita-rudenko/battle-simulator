import Soldier from "../models/soldier";

let instance = null;
export class SoldierFactory {
  constructor() {
    if (instance) {
      return instance;
    } else {
      instance = this;
    }
  }

  static getInstance() {
    return new SoldierFactory();
  }

  createSoldier(data) {
    return new Soldier(data.health, data.recharge);
  }

  createSoldiers(arr) {
    return arr.map(soldier => this.createSoldier(soldier));
  }
}
