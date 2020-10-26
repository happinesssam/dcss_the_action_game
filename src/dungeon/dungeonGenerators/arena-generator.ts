import { ILevelShell } from "../model/i-level-shell";
import { ILevelGenerator } from "./i-level-generator";

export class ArenaGenerator implements ILevelGenerator{
    constructor(){
    }

    public createLevel(levelShell:ILevelShell):void{
        requestAnimationFrame(()=>console.log(levelShell.id));
    }
}