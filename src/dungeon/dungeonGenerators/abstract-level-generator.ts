import { ITinyPoint } from "../../global/model/i-tiny-point";
import { IDungeonGenArgs } from "../dungeon-generator";
import { IStairsShell } from "../model/i-level-shell";
import LevelState from "../model/level-state";
import { GenLevel } from "./model/GenLevel";
import { IGenLevel } from "./model/i-gen-level";
import { ILevelGenerator } from "./model/i-level-generator";

export class AbstractLevelGenerator implements ILevelGenerator{
    protected genLevel:IGenLevel;
    protected randomGen:Phaser.Math.RandomDataGenerator;

    public createLevel(args:IDungeonGenArgs): void {
        this.randomGen = new Phaser.Math.RandomDataGenerator(args.levelShell.seed.toString());

        this.genLevel = new GenLevel(args.levelShell, new LevelState(), this.randomGen);

        this.buildLevel();
    }

    /**
     * override this
     */
    protected buildLevel():void {
    }

    protected addStairs(stairsShell:IStairsShell, position:ITinyPoint): void {
       // this.genLevel.levelState.
    }
}