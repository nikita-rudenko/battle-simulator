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
      // console.log('Recharging');
      return 0;
    }
  }

  damageReceived(dmg) {
    this.setHealth(this.getHealth() - dmg);
  }

  isAlive() {
    return this.getHealth() > 0;
  }

  startRecharge() {
    this.time = Date.now();
  }

  isRecharged() {
    return Date.now() - this.time > this.recharge;
  }

  getHealth() {
    return this.health;
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
}
