export default class BaseUnit {
  constructor() {}
  makeDamage() {
    // number
    throw new Error("This method has to be defined");
  }

  isAlive() {
    // bool
    throw new Error("This method has to be defined");
  }

  attackSuccess() {
    // number
    throw new Error("This method has to be defined");
  }

  damageReceived() {
    // damage: number
    throw new Error("This method has to be defined");
  }
}
