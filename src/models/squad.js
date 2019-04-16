import BaseUnit from "./baseUnit";

export default class Squad extends BaseUnit {
  constructor(units, type) {
    super();
    this.units = units;
    this.type = type;
  }

  makeDamage() {
    // number
  }

  isAlive() {
    // bool
  }

  attackSuccess() {
    // number
  }

  damageReceived() {
    // damage: number
  }

  incrementExperience() {}

  setRecharge() {}
}
