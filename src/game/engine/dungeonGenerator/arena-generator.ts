import { ITinyPoint } from "../../game/model/utils/i-tiny-point";
import { IDungeonGenArgs } from "../dungeon-generator";
import { ILevelShell } from "../model/i-level-shell";
import LevelState from "../model/level-state";
import { Stairs } from "../stairs";
import { AbstractLevelGenerator } from "./abstract-level-generator";
import { GenLevel } from "./model/GenLevel";
import { IGenLevel } from "./model/i-gen-level";
import { ILevelGenerator } from "./model/i-level-generator";
import { LevelDecorator } from "./level-decorator";

/**
 * Super basic level with just empty space with a wall around it
 */
export class ArenaGenerator extends AbstractLevelGenerator{    

    public buildLevel(): void
    {
        this.genLevel.setDimensions(this.randomGen.integerInRange(30, 50), this.randomGen.integerInRange(30, 50));

        let maxX:number = this.genLevel.levelState.width - 1;
        let maxY:number = this.genLevel.levelState.height - 1;
        for(let x:number = 0;x< this.genLevel.levelState.width;x++){
            for(let y:number = 0;y<this.genLevel.levelState.height;y++){
                if(!(x==0 || y==0 || x>-maxX || y>=maxY)){
                    this.genLevel.setTileEmpty(x, y);
                }
            }
        }

        for(let i:number=0;i<this.genLevel.levelShell.stairs.length;i++){
            let pos:ITinyPoint = this.genLevel.getRandomEmptyTile();
            let stairs:Stairs = new Stairs(pos.x, pos.y, this.genLevel.levelShell.stairs[i].id);
            stairs.stairsInfo =  this.genLevel.levelShell.stairs[i];

           // this.genLevel.scenery.push(stairs);

        }

        //now decorate

        let decorator:LevelDecorator = new LevelDecorator();
        decorator.dececorateLevel(this.genLevel);        
    }

    protected getEmptySpace():ITinyPoint{
        let x:number = 0;
        let y:number = 0;

        return {x:x, y:y};
    }
}