import { IDungeonGenArgs } from "../../engine/dungeonGenerator/dungeon-generator";

export interface ILevelGenerator{
    //I want to use web workers for the level generators so it doesn't freeze up the browser while it generates
    createLevel(args:IDungeonGenArgs):void;
}