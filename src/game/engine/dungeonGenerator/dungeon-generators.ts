import { ILevelShell } from "../../model/dungeon/i-level-shell";
import { ILevelGenerator } from "../../model/dungeonGenerator/i-level-generator";
import { ArenaGenerator } from "./arena-generator";

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
}//Not used!