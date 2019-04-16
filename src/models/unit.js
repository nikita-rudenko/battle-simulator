import BaseUnit from "./baseUnit";

export default class Unit extends BaseUnit {
  constructor(health, recharge, power) {
    super();
    this.health = health;
    this.recharge = recharge;
    this.timeRecharged = 200;
    this.power = power;
  }

  makeDamage() {
    // number
    return;
  }

  attackSuccess() {
    // number
    return;
  }

  damageReceived() {
    // damage: number
    return;
  }

  isAlive() {
    // bool
    return;
  }

  setRecharge() {
    // num
    return;
  }

  isRecharged() {
    // bool
    return;
  }

  startRecharge() {
    return;
  }

  getHealth() {
    return;
  }

  setHealth() {
    return;
  }
}
