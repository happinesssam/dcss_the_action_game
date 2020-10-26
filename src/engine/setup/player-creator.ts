import { Player } from "../../actors/model/player";
import { BranchNames } from "../../global/names";
import { IGameOptions } from "./game-creator";

export class PlayerCreator{
    public static getPlayer(options:IGameOptions  = null):Player{
        let player:Player = new Player();
        player.location = BranchNames.ENTRANCE;
        player.stairsLocation = BranchNames.ENTRANCE;
        return player;
    }
}