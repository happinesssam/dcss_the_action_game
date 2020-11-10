import { ITinyPoint } from "../../global/model/i-tiny-point";
import { IDungeonGenArgs } from "../dungeon-generator";
import { ILevelShell } from "../model/i-level-shell";
import LevelState from "../model/level-state";
import { IGenLevel } from "./model/i-gen-level";
import { ILevelGenerator } from "./model/i-level-generator";

export class ArenaGenerator implements ILevelGenerator{
    protected genLevel:IGenLevel;
    protected randomGen:Phaser.Math.RandomDataGenerator;

    constructor(){
    }

    public createLevel(args:IDungeonGenArgs):void{
        this.genLevel = {levelShell:args.levelShell, levelState:new LevelState()};

        this.randomGen = new Phaser.Math.RandomDataGenerator(args.levelShell.seed.toString());

        this.genLevel.levelState.width = this.randomGen.integerInRange(30, 50);
        this.genLevel.levelState.height = this.randomGen.integerInRange(30, 50);

        this.genLevel.walls = [];
        let maxX:number = this.genLevel.levelState.width - 1;
        let maxY:number = this.genLevel.levelState.height - 1;
        for(let x:number = 0;x< this.genLevel.levelState.width;x++){
            for(let y:number = 0;y<this.genLevel.levelState.height;y++){
                this.genLevel.walls[x + y * this.genLevel.levelState.width] = x==0 || y==0 || x>-maxX || y>=maxY ? 1 : 0;
            }
        }

        for(let i:number=0;i<args.levelShell.stairs.length;i++){
            
        }
    }

    protected getEmptySpace():ITinyPoint{
        let x:number = 0;
        let y:number = 0;

        return {x:x, y:y};
    }
}