// @ts-ignore
import DungeonGenWorker from "web-worker:./dungeonGenerators/dungeon-gen-worker.ts";
import { ILevelGenerator } from "./dungeonGenerators/model/i-level-generator";
import { ILevelShell } from "./model/i-level-shell";
import LevelState from "./model/level-state";

/**
 * This class will not have that much to do with the original, because: 
 * a)It needs to be different due to the fact you need more space for an action game 
 * b)I really don't understand the orginal level gen code and I think it's much too much for the scope of this project
 * This means that it's going to be fairly basic and boring compared to the proper game, at least initially
 */
export class DungeonGenerator{

    private static _instance:DungeonGenerator;

    public static getInstance():DungeonGenerator{
        if(!this._instance)this._instance = new DungeonGenerator();

        return this._instance;
    }


    //initially just spawn a box with some stairs.
    public getDungeonLevel(levelShell:ILevelShell, callback:(level:LevelState)=>void):LevelState{
        let level:LevelState;

        const dungeonGenerators = new DungeonGenWorker();

        dungeonGenerators.postMessage({type: 'init', args: 'web worker'});

        dungeonGenerators.postMessage({type: 'exec', func:'createLevel', args: {levelShell:levelShell, callback:callback} as IDungeonGenArgs});

        return null;
    }
}
export interface IDungeonGenArgs{
    levelShell:ILevelShell;
    callback:(level:LevelState)=>void;
}