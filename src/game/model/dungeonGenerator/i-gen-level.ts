import { ITinyPoint } from "../../../global/i-tiny-point";
import LevelState from "../../model/level-state";
import { ILevelShell } from "../dungeon/i-level-shell";

export interface IGenLevel{
    levelShell:ILevelShell;
    levelState:LevelState;

    walls?:number[];
    dontDecorate?:boolean[];//tiles that shouldn't be touched by the decorator
    emptyTiles:number[];

    setDimensions(width:number, height:number): void;
    setTileUsed(x:number, y:number, isWall:boolean):void;
    setTileEmpty(x:number, y:number):void;
    getRandomEmptyTile():ITinyPoint;
}