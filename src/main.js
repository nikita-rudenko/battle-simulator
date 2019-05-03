import fs from 'fs';
import { Battle } from './core/battle';
import { Factory } from './factory/Factory';

export class Application {
  async init() {
    const json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    const factory = Factory.getInstance();
    const armies = factory.createArmies(json.armies);

    const battle = new Battle(armies);
    battle.start();
  }
}
