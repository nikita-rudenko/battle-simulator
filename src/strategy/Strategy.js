import { getRandomFromArr } from '../helpers/helpers';

export default class Strategy {
  constructor(type) {
    this.type = type;
  }

  findTarget(arr) {
    switch (this.type) {
      case 'weakest':
        return this.weakestStrategy(arr);
      case 'strongest':
        return this.strongestStrategy(arr);
      case 'random':
        return this.randomStrategy(arr);
      default:
        return this.randomStrategy(arr);
    }
  }

  weakestStrategy(arr) {
    const powerArr = arr.sort(squad => squad.getPower());
    const weakestSquad = powerArr[0];
    return weakestSquad;
  }

  strongestStrategy(arr) {
    const powerArr = arr.sort(squad => squad.getPower());
    const strongestSquad = powerArr[powerArr.length - 1];
    return strongestSquad;
  }

  randomStrategy(arr) {
    return getRandomFromArr(arr);
  }
}
