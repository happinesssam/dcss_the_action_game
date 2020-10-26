import { ILevelShell } from "../model/i-level-shell";
import { ArenaGenerator } from "./arena-generator";
import { ILevelGenerator } from "./i-level-generator";

export class DungeonGenerators{

    public constuctor(options:string){
        
    }

    public createLevel(levelShell:ILevelShell):void{
        let gen:ILevelGenerator = new ArenaGenerator();

        gen.createLevel(levelShell);
    }

    public debug(message:string):void{
        console.log("message from gen worker:", message);
    }
}