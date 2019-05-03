import Unit from './Unit';

export default class Vehicle extends Unit {
  constructor(health, recharge, operators) {
    super(health, recharge);
    this._operators = operators || [];
  }

  getDamage() {
    // return (0.5 * (1 + health / 100) * random(50 + experience, 100)) / 100;
  }

  attackSuccess() {}

  getTotalHealth() {}

  setRecharge() {}

  isAlive() {}

  incExpForOperators() {}

  _delete() {}
}
