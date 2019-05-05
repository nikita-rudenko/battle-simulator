import Unit from './Unit';
import { getGeometricMean, getSum, getRandomFromArr } from '../helpers/helpers';

export default class Vehicle extends Unit {
  constructor(health, recharge, operators) {
    super(health, recharge);
    this._operators = operators || [];
  }

  attackSuccess() {
    // 0.5 * (1 + vehicle.health / 100) * gavg(operators.attack_success)
    let success =
      0.5 * getGeometricMean(this._operators.map(op => op.attackSuccess()));
    success = (success * 100).toFixed(2);
    return success;
  }

  makeDamage() {
    // 0.1 + sum(operators.experience / 100)
    const operatorsExperience = this._operators.map(op => op.experience);
    return 0.1 + getSum(operatorsExperience) / 100;
  }

  getTotalHealth() {
    return this._operators.map(op => op.health);
  }

  damageReceived(dmg) {
    // 60% vehicle
    const vehicleDmg = Math.floor(dmg * 0.6);
    // 20% random operator
    const bigDmg = Math.floor(dmg * 0.2);
    // 10% all
    const smallDmg = Math.floor(dmg * 0.1);

    super.damageReceived(vehicleDmg);
    // get a random operator for 20% damage
    const randomOperator = getRandomFromArr(this._operators);
    this._operators.map(op => {
      if (op === randomOperator) {
        op.damageReceived(bigDmg);
      } else {
        op.damageReceived(smallDmg);
      }
    });
  }

  isAlive() {
    return this.getTotalHealth() && this.health ? true : false;
  }

  incrementExperience() {
    this._operators.map(op => op.incrementExperience());
  }
}
