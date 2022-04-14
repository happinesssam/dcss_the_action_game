import { BranchNames } from "../../data/dungeon/names";
import { Player } from "../../model/actors/player";
import { IGameOptions } from "./game-creator";

export class PlayerCreator{
    public static getPlayer(options:IGameOptions  = null):Player{
        let player:Player = new Player();
        player.location = BranchNames.ENTRANCE;
        player.stairsLocation = BranchNames.ENTRANCE;
        return player;
    }
}