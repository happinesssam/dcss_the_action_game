import { ITinyPoint } from "../../model/utils/i-tiny-point";
import { IDungeonGenArgs } from "./dungeon-generator";
import LevelState from "../../model/level-state";
import { GenLevel } from "../../model/dungeonGenerator/gen-level";
import { ILevelGenerator } from "../../model/dungeonGenerator/i-level-generator";
import { IStairsShell } from "../../model/dungeon/i-level-shell";

export class AbstractLevelGenerator implements ILevelGenerator{
    protected genLevel:GenLevel;
    protected randomGen:Phaser.Math.RandomDataGenerator;

    public createLevel(args:IDungeonGenArgs): void {
        this.randomGen = new Phaser.Math.RandomDataGenerator(args.levelShell.seed.toString());

        this.genLevel = new GenLevel(args.levelShell, new LevelState(), this.randomGen);

        this.buildLevel();

        this.addMobs();

        this.decorateLeveL();

        args.callback(this.genLevel.levelState); 
    }

    /**
     * override this
     */
    protected buildLevel():void {
    }

    protected addMobs(): void {

    }

    protected decorateLeveL(): void{

    }

    protected addStairs(stairsShell:IStairsShell, position:ITinyPoint): void {
       // this.genLevel.levelState.
    }
}