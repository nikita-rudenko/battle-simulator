import Squad from './Squad';

export default class Army extends Squad {
  constructor(units, strategy, name) {
    super();
    this.units = units;
    this.strategy = strategy;
    this.name = name;
  }

  isAlive() {
    return this.units.length ? true : false;
  }

  checkSquads() {
    this.units = this.units.filter(squad => squad.isAlive());
  }
}
