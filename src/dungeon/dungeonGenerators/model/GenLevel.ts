import { ITinyPoint } from "../../../global/model/i-tiny-point";
import { Feature } from "../../feature";
import { ILevelShell } from "../../model/i-level-shell";
import LevelState from "../../model/level-state";
import { Stairs } from "../../stairs";

/**
 * A level helper class used exclusively by level generator - lots of functions and extra vars
 */
export class GenLevel{
    public levelShell:ILevelShell;
    public levelState:LevelState;
    public features:Feature[];

    public walls?:number[];
    public dontDecorate?:boolean[];//tiles that shouldn't be touched by the decorator
    public emptyTiles:number[];
    public randomGen:Phaser.Math.RandomDataGenerator;
    public width:number;
    public height:number;


    constructor(levelShell:ILevelShell, levelState:LevelState, randomGen:Phaser.Math.RandomDataGenerator){
        this.levelShell = levelShell;
        this.levelState = levelState;
        this.randomGen = randomGen;
    }

    public setDimensions(width:number, height:number):void{
        this.levelState.width = this.width = width;
        this.levelState.height = this.height = height;
        this.walls = [];
        this.emptyTiles = [];
        const length:number = width * height;
        //So the default is everything is walls
        for(let i:number = 0;i<length;i++){
            this.walls[i] = 1;
        }
    }

    public setTileUsed(x:number, y:number, isWall:boolean):void{
        const index:number = this.getIndex(x, y);
        if(isWall){
            this.walls[index] = 1;
        }
        if(this.emptyTiles.indexOf(index)!=-1){
            this.emptyTiles.splice(this.emptyTiles.indexOf(index), 1);
        }
    }

    public setTileEmpty(x:number, y:number):void{
        const index:number = this.getIndex(x, y);
        this.walls[index] = 0;
        if(this.emptyTiles.indexOf(index)==-1){
            this.emptyTiles.push(index);
        }
    }

    public getRandomEmptyTile():ITinyPoint{
        let index:number = this.randomGen.pick(this.emptyTiles);        
        return this.getPoint(index);
    }

    protected getIndex(x:number, y:number):number{
        return x + y * this.width;
    }

    protected getPoint(index:number):ITinyPoint{
        return {x: index%this.width, y:Math.floor(index / this.width)};//should I pool this?
    }
}