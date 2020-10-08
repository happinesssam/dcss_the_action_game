import LevelState from "../model/level-state";

/**
 * This class will not have that much to do with the original, because: 
 * a)It needs to be different due to the fact you need more space for an action game 
 * b)I really don't understand the orginal level gen code and I think it's much too much for the scope of this project
 */
export class DungeonGenerator{

    private static _instance:DungeonGenerator;

    public static getInstance():DungeonGenerator{
        if(!this._instance)this._instance = new DungeonGenerator();

        return this._instance;
    }


    //initially just spawn a box with some stairs.
    public getDungeonLevel():LevelState{
        return null;
    }
}