import { ITinyPoint } from "../../global/model/i-tiny-point";
import { IDungeonGenArgs } from "../dungeon-generator";
import { ILevelShell } from "../model/i-level-shell";
import LevelState from "../model/level-state";
import { Stairs } from "../stairs";
import { GenLevel } from "./model/GenLevel";
import { ILevelGenerator } from "./model/i-level-generator";
import { LevelDecorator } from "./level-decorator";

export class ArenaGenerator implements ILevelGenerator{
    protected genLevel:GenLevel;
    protected randomGen:Phaser.Math.RandomDataGenerator;

    constructor(){
    }

    public createLevel(args:IDungeonGenArgs):void{
        
        this.randomGen = new Phaser.Math.RandomDataGenerator(args.levelShell.seed.toString());

        this.genLevel = new GenLevel(args.levelShell, new LevelState(), this.randomGen);

        this.genLevel.setDimensions(this.randomGen.integerInRange(30, 50), this.randomGen.integerInRange(30, 50));

        let maxX:number = this.genLevel.width - 1;
        let maxY:number = this.genLevel.height - 1;
        for(let x:number = 1;x< maxX ;x++){
            for(let y:number = 1;y < maxY ;y++){
                this.genLevel.setTileEmpty(x, y);
            }
        }

        //todo I should put this in a superclass
        for(let i:number=0;i<args.levelShell.stairs.length;i++){
            let pos:ITinyPoint = this.genLevel.getRandomEmptyTile();
            let stairs:Stairs = new Stairs(pos.x, pos.y, args.levelShell.stairs[i].id);
            stairs.connectsToLevel = args.levelShell.stairs[i].linkLevel;
            stairs.connectsToStairs = args.levelShell.stairs[i].linkStairs;
            stairs.theme = "";
            this.genLevel.levelState.scenery.push(stairs);
        }

        //now decorate

        let decorator:LevelDecorator = new LevelDecorator();
        decorator.dececorateLevel(this.genLevel);
        
        //now add mobs and items.

        args.callback(this.genLevel.levelState); 
    }

    protected getEmptySpace():ITinyPoint{
        let x:number = 0;
        let y:number = 0;

        return {x:x, y:y};
    }
}