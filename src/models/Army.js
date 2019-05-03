import Squad from './Squad';

export default class Army extends Squad {
  constructor(units, strategy) {
    super();
    this.units = units;
    this.strategy = strategy;
  }

  isAlive() {}

  checkSquads() {}
}
