import Unit from './Unit';
import { getGeometricMean } from '../helpers/helpers';

export default class Squad extends Unit {
  constructor(type, units) {
    super();
    this.type = type;
    this.units = units;
  }

  makeDamage() {
    let sum = 0;
    for (let i = 0; i < this.units.length; i++) {
      sum += this.units[i].makeDamage();
    }
    return sum;
  }

  isAlive() {
    return this.units.some(unit => unit.health > 0);
  }

  attackSuccess() {
    // Geometric average of the attack success of each member.
    return getGeometricMean(this.units.map(unit => unit.attackSuccess()));
  }

  damageReceived(dmg) {
    // dmg / length
    const calcDamage = Math.floor((dmg / this.units.length).toFixed(2) * 100);
    this.units.map(unit => unit.damageReceived(calcDamage));
  }

  checkUnits() {
    this.units = this.units.filter(unit => unit.isAlive());
  }

  startRecharge() {
    this.units.map(unit => unit.startRecharge());
  }
}
