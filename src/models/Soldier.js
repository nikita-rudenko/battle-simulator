import Unit from './Unit';
import { getRandomInt } from '../helpers/helpers';

export default class Soldier extends Unit {
  _experience = 1; // [0-50]

  constructor(health, recharge) {
    super(health, recharge);
  }

  attackSuccess() {
    // 0.5 * (1 + health/100) * random(50 + experience, 100) / 100
    return (
      (super.attackSuccess() *
        (1 + this.health / 100) *
        getRandomInt(50 + this._experience, 100)) /
      100
    );
  }

  makeDamage() {
    // 0.05 + experience / 100
    return super.makeDamage() + this.experience / 100;
  }

  damageReceived(dmg) {
    super.damageReceived(dmg);
  }

  incrementExperience() {
    this.setExperience(this._experience + 1);
  }

  setExperience(val) {
    if (val > 50) {
      this._experience = 50;
    } else if (val < 0) {
      this._experience = 1;
    } else {
      this._experience = val;
    }
  }
}
