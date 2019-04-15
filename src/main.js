import fs from 'fs';
import {Battle} from "./core/battle";


export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));


    const battle = new Battle(json.armies);
    battle.start();
  }
}
