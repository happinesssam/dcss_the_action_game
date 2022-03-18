import { ITinyPoint } from "../../../global/model/i-tiny-point";
import { ILevelShell } from "../../model/i-level-shell";
import LevelState from "../../model/level-state";

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