import { IDungeonGenArgs } from "../dungeon-generator";
import { ILevelShell } from "../model/i-level-shell";

export interface ILevelGenerator{
    //I want to use web workers for the level generators so it doesn't freeze up the browser while it generates
    createLevel(args:IDungeonGenArgs):void;
}