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

      // filter out attacking army
      const temp = armiesArr.filter(army => army !== attackingArmy);

      let defArmy = getRandomFromArr(temp);
      let defSquad = getRandomFromArr(defArmy.units);

      if (attackingSquad.attackSuccess() > defSquad.attackSuccess()) {
        console.log(attackingArmy.name + ' attacks ' + defArmy.name);
        const attack = attackingSquad.makeDamage();
        defSquad.damageReceived(attack);
        defSquad.checkUnits();
        defArmy.checkSquads();
        attackingSquad.startRecharge();
      }

      // filter out defeated armies
      armiesArr = armiesArr.filter(army => {
        if (!army.isAlive()) {
          console.log('☠ ' + defArmy.name + ' has been defeated ☠');
        }
        return army.isAlive();
      });
    }

    console.log('🎉🎉🎉  The winner is ' + armiesArr[0].name + ' 🎉🎉🎉');
  }
}
