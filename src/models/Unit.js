import BaseUnit from './BaseUnit';

export default class Unit extends BaseUnit {
  constructor(health, recharge) {
    super();
    this.health = health;
    this.recharge = recharge; // [100-2000]
    this.time = 0;
  }

  makeDamage() {
    return 0.05;
  }

  attackSuccess() {
    if (this.isRecharged()) {
      return 0.5 * (1 + this.health / 100);
    } else {
      return 0;
    }
  }

  damageReceived(dmg) {
    this.setHealth(this.health - dmg);
  }

  isAlive() {
    return this.health > 0;
  }

  startRecharge() {
    this.time = Date.now();
  }

  isRecharged() {
    return Date.now() - this.time > this.recharge;
  }

  setHealth(val) {
    if (val < 0) {
      this.health = 0;
    } else if (val > 100) {
      this.health = 100;
    } else {
      this.health = val;
    }
  }

  getPower() {
    const success = this.attackSuccess();
    return Math.floor(success + +this.health);
  }
}
