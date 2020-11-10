import { ITinyPoint } from "../../../global/model/i-tiny-point";
import { ILevelShell } from "../../model/i-level-shell";
import LevelState from "../../model/level-state";

export class GenLevel{
    public levelShell:ILevelShell;
    public levelState:LevelState;

    public walls?:number[];
    public dontDecorate?:boolean[];//tiles that shouldn't be touched by the decorator
    public emptyTiles:number[];
    public randomGen:Phaser.Math.RandomDataGenerator;


    constructor(levelShell:ILevelShell, levelState:LevelState, randomGen:Phaser.Math.RandomDataGenerator){
        this.levelShell = levelShell;
        this.levelState = levelState;
        this.randomGen = randomGen;
    }

    public setDimensions(width:number, height:number):void{
        this.levelState.width = width;
        this.levelState.height = height;
        this.walls = [];
        this.emptyTiles = [];
        let length:number = width * height;
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
        return x + y * this.levelState.width;
    }

    protected getPoint(index:number):ITinyPoint{
        return {x: index%this.levelState.width, y:Math.floor(index / this.levelState.width)};//should I pool this?
    }
}