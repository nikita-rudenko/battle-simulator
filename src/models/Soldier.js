import Unit from './Unit';
import { getRandomInt } from '../helpers/helpers';

export default class Soldier extends Unit {
  _experience = 1; // [0-50]

  constructor(health, recharge) {
    super(health, recharge);
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

  attackSuccess() {
    return (
      (super.attackSuccess() *
        (1 + this.health / 100) *
        getRandomInt(50 + this._experience, 100)) /
      100
    );
  }

  damageReceived(dmg) {
    super.damageReceived(dmg);
  }

  makeDamage() {
    return super.makeDamage() + this.experience / 100;
  }

  incrementExperience() {
    console.log(this._experience);

    this.setExperience(this._experience + 1);
  }
}
