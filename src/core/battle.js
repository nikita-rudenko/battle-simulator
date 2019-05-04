import { getRandomFromArr } from '../helpers/helpers';

export class Battle {
  armies = [];

  constructor(armies) {
    this.armies = armies;
  }

  start() {
    let armiesArr = this.armies;

    while (armiesArr.length > 1) {
      const attackingArmy = getRandomFromArr(armiesArr);
      const attackingSquad = getRandomFromArr(attackingArmy.units);
      const temp = armiesArr.filter(army => army !== attackingArmy);

      let defArmy = getRandomFromArr(temp);
      let defSquad = getRandomFromArr(defArmy.units);

      if (attackingSquad.attackSuccess() > defSquad.attackSuccess()) {
        const attack = attackingSquad.makeDamage();
        defSquad.damageReceived(attack);
        defSquad.isAlive();
        defSquad.checkUnits();
        defArmy.checkSquads();
      }
      armiesArr = armiesArr.filter(army => army.isAlive());
    }

    console.log(armiesArr[0].name);
  }
}
