import { ILevelShell } from "../dungeon/model/i-level-shell";
import LevelState from "./level-state";
import { Player } from "../actors/model/player";

export default class GameState{
     public dungeonShell:Map<string, ILevelShell>;
     public levels:LevelState[] = [];
     public player:Player;
     public seed:number;
} 