import Unit from './Unit';
import { getGeometricMean, getSum } from '../helpers/helpers';

export default class Vehicle extends Unit {
  constructor(health, recharge, operators) {
    super(health, recharge);
    this._operators = operators || [];
  }

  makeDamage() {
    // 0.1 + sum(operators.experience / 100)
    const operatorsExperience = this._operators.map(op => op.experience);
    return 0.1 + getSum(operatorsExperience) / 100;
  }

  attackSuccess() {
    // 0.5 * (1 + vehicle.health / 100) * gavg(operators.attack_success)
    let suc =
      super.attackSuccess() *
      getGeometricMean(this._operators.map(op => op.attackSuccess()));
    suc = (suc * 100).toFixed(2);
    return suc;
  }

  getTotalHealth() {
    return this.operators.map(op => op.health);
  }

  damageReceived(dmg) {
    // 60% vehicle
    const d = Math.ceil(dmg * 0.6);
    super.damageReceived(d);
    //20% random operator
    // 10% all
  }

  setRecharge() {}

  isAlive() {}

  incExpForOperators() {
    this.operators.map(operator => operator.incrementExperience());
  }

  _delete() {}
}
