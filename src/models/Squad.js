import Unit from './Unit';
import { getGeometricMean } from '../helpers/helpers';

export default class Squad extends Unit {
  _power = 0;
  constructor(type, units) {
    super();
    this.type = type;
    this.units = units;
  }

  attackSuccess() {
    // Geometric average of the attack success of each member.
    return getGeometricMean(this.units.map(unit => unit.attackSuccess()));
  }

  makeDamage() {
    const damage = this.units.reduce((sum, unit) => {
      return (sum += unit.makeDamage());
    }, 0);
    return damage;
  }

  damageReceived(dmg) {
    // dmg / length
    const calcDamage = Math.floor((dmg / this.units.length).toFixed(2) * 100);
    this.units.map(unit => unit.damageReceived(calcDamage));
  }

  isAlive() {
    return this.units.some(unit => unit.health > 0);
  }

  checkUnits() {
    this.units = this.units.filter(unit => unit.isAlive());
  }

  startRecharge() {
    this.units.map(unit => unit.startRecharge());
  }

  incrementExperience() {
    this.units.map(unit => unit.incrementExperience());
  }

  getPower() {
    this._power = this.units.reduce((sum, unit) => {
      return sum + unit.getPower();
    }, 0);
    return this._power;
  }
}
