import { ILevelShell } from "../../dungeon/model/i-level-shell";
import LevelState from "../../dungeon/model/level-state";
import { Player } from "../../actors/model/player";

export default class GameState{
     public dungeonShell:Map<string, ILevelShell> = new Map<string, ILevelShell>();
     public levels:Map<string, LevelState> = new Map<string, LevelState>();
     public player:Player;
     public seed:number;
} 