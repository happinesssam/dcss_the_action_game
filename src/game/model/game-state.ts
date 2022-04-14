import LevelState from "./level-state";
import { Player } from "./actors/player";
import { ILevelShell } from "./dungeon/i-level-shell";

export default class GameState{
     /**
      * This is the bare bones of the dungeon structure that is calulated at the start - full levels are only created when needed
      */
     public dungeonShell:Map<string, ILevelShell> = new Map<string, ILevelShell>();
     /**
      * The actual levels once created
      */
     public levels:Map<string, LevelState> = new Map<string, LevelState>();
     public player:Player;
     public seed:number;
} 