import fs from "fs";
import { Battle } from "./core/battle";
import Soldier from "./models/soldier";
import { SoldierFactory } from "./factory/soldierFactory";

export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + "/../data/data.json"));

    const factory = SoldierFactory.getInstance();

    const battle = new Battle(json.armies);
    battle.start();
  }
}
