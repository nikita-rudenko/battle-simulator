import BaseUnit from './BaseUnit';

export default class Unit extends BaseUnit {
  constructor(health, recharge) {
    super();
    this.health = health;
    this.recharge = recharge;
    this.isRecharged = true;
    this.time = 0;
  }

  makeDamage() {
    return 0.05;
  }

  attackSuccess() {
    return 0.5 * (1 + this.health / 100);
  }

  damageReceived(dmg) {
    console.log(this.getHealth(), dmg);

    this.setHealth(this.getHealth() - dmg);
  }

  isAlive() {
    return this.health > 0;
  }

  startRecharge() {
    this.isRecharged = false;
    this.time = Date.now();
  }

  isRecharged() {
    if (Date.now() - this.time > this.recharge) {
      this.isRecharged = true;
    }
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
