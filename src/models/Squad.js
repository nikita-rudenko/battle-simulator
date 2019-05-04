import Unit from './Unit';
import { getGeometricMean } from '../helpers/helpers';

export default class Squad extends Unit {
  constructor(type, units) {
    super();
    this.units = units;
    this.type = type;
  }

  makeDamage() {
    let sum = 0;
    for (let i = 0; i < this.units.length; i++) {
      sum += this.units[i].makeDamage();
    }
    return sum;
  }

  isAlive() {
    // bool
  }

  attackSuccess() {
    // Geometric average of the attack success of each member.
    return getGeometricMean(this.units.map(unit => unit.attackSuccess()));
  }

  damageReceived(dmg) {
    // damage: number
    // dmg / length
    const calcDamage = Math.ceil((dmg / this.units.length).toFixed(2) * 100);
    // console.log(calcDamage);
    this.units.map(unit => unit.damageReceived(calcDamage));
  }

  incrementExperience() {}

  setRecharge() {}
}
