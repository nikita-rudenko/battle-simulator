import { getRandomFromArr } from '../helpers/helpers';

export class Battle {
  armies = [];

  constructor(armies) {
    this.armies = armies;
  }

  start() {
    let armiesArr = this.armies;

    const attackingArmy = getRandomFromArr(armiesArr);
    const attackingSquad = getRandomFromArr(attackingArmy.units);

    const defArmy = getRandomFromArr(armiesArr);
    const defSquad = getRandomFromArr(defArmy.units);

    if (attackingSquad.attackSuccess() > defSquad.attackSuccess()) {
      // console.log(defSquad);
      const attack = attackingSquad.makeDamage();
      // console.log(attack);
      defSquad.damageReceived(attack);
      console.log(defSquad);
    }
  }
}
