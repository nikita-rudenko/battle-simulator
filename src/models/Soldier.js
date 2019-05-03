import Unit from './Unit';

export default class Soldier extends Unit {
  _experience = 0; // [0-50]

  constructor(health, recharge) {
    super(health, recharge);
  }

  set experience(val) {
    if (val > 50) {
      this._experience = 50;
    } else if (val < 0) {
      this._experience = 1;
    } else {
      this._experience = val;
    }
  }

  get experience() {
    return this._experience;
  }

  attackSuccess() {
    return (
      (super.attackSuccess() *
        (1 + this.health / 100) *
        Math.random(50 + this.experience, 100)) /
      100
    );
  }

  makeDamage() {
    return super.makeDamage() + this.experience / 100;
  }
}
