import { ILevelShell } from "../../model/i-level-shell";
import LevelState from "../../model/level-state";

export interface IGenLevel{
    levelShell:ILevelShell;
    levelState:LevelState;

    walls?:number[];
    dontDecorate?:boolean[];//tiles that shouldn't be touched by the decorator
    emptyTiles:number[];
}