import { Player } from "../../actors/model/player";
import { Branches } from "../../dungeon/branches";
import { IBranchInfo } from "../../dungeon/model/i-branch-info";
import { ILevelShell } from "../../dungeon/model/i-level-shell";
import { BranchNames } from "../../global/names";
import { MathsUtil } from "../../global/utils/math-utils";
import GameState from "../../global/model/game-state";
import { PlayerCreator } from "./player-creator";

export class GameCreator{

    public static getGameState(options:IGameOptions = null):GameState{
        let gameState:GameState = new GameState();
        gameState.dungeonShell = GameCreator.getDungeonBase(options?.seed ? options?.seed : Math.random());

        gameState.player = PlayerCreator.getPlayer(options);

        return gameState;
    }

    protected static getDungeonBase(seed:number):Map<string, ILevelShell>{
        const levels:Map<string, ILevelShell> = new Map<string, ILevelShell>();
        const randomGen:Phaser.Math.RandomDataGenerator = new Phaser.Math.RandomDataGenerator(seed.toString());
        
        const templeLevel:number = MathsUtil.getNumberSliding(0.3, 2, 9, randomGen);
        const lairLevel:number = MathsUtil.pickFromWeigths([8,9,10,11], [3,4,5,2], randomGen);
        const vaultsLevel:number = MathsUtil.pickFromWeigths([13,14], [3,5], randomGen);
        
       
        let dungeon:IBranchInfo = Branches.branches.get(BranchNames.DUNGEON);
        let lastLevel:ILevelShell;
        for(let i:number = 0;i<dungeon.levels;i++){
            let depth:number = i + 1;
            let levelShell:ILevelShell = GameCreator.getShell(BranchNames.DUNGEON, depth, randomGen.integer());

            if(depth==templeLevel){
                let temple:ILevelShell = GameCreator.getShell(BranchNames.TEMPLE, 1, randomGen.integer());
                levelShell.linksTo.push(temple.id);
                levels.set(temple.id, temple);
            }

            if(depth==lairLevel){
                GameCreator.getLair(levels, randomGen, levelShell);
            }

            if(lastLevel){
                lastLevel.linksTo.push(levelShell.id);
                levelShell.linksTo.push(lastLevel.id);
            }else{
                levelShell.linksTo.push(BranchNames.ENTRANCE);
            }
            lastLevel = levelShell;
            levels.set(levelShell.id, levelShell);
        }
console.log(levels);
        return levels;
    }

    protected static getLair(levels:Map<string, ILevelShell>, randomGen:Phaser.Math.RandomDataGenerator, entrance:ILevelShell):void{
        const lair:IBranchInfo = Branches.branches.get(BranchNames.LAIR);

        const lairBranches:string[] = MathsUtil.selectFromArray([BranchNames.SHOALS, BranchNames.SNAKE, BranchNames.SPIDER, BranchNames.SWAMP],
            2, randomGen);
        const lairBranchesDepths:number[] = [MathsUtil.pickFromWeigths([3,4,5], [2,4,3], randomGen), MathsUtil.pickFromWeigths([3,4,5], [1,5,3], randomGen)];
        const slimePitsLevel:number = MathsUtil.pickFromWeigths([3,4,5,6], [1,4,5,3], randomGen);

        let lastLevel:ILevelShell;
        for(let i:number = 0;i<lair.levels;i++){
            let depth:number = i + 1;
            let levelShell:ILevelShell = GameCreator.getShell(BranchNames.LAIR, depth, randomGen.integer());

            for(let j:number=0;j<lairBranchesDepths.length;j++){
                if(depth==lairBranchesDepths[j]){
                    GameCreator.getLairBranches(levels, randomGen, lairBranches[j], levelShell);
                }
            }
            if(depth==slimePitsLevel){
                GameCreator.getLairBranches(levels, randomGen, BranchNames.SLIME_PITS, levelShell);
            }

            if(lastLevel){
                lastLevel.linksTo.push(levelShell.id);
                levelShell.linksTo.push(lastLevel.id);
            }else{
                entrance.linksTo.push(levelShell.id);
                levelShell.linksTo.push(entrance.id);
            }
            lastLevel = levelShell;
            levels.set(levelShell.id, levelShell);
        }        
    }

    protected static getLairBranches(levels:Map<string, ILevelShell>, randomGen:Phaser.Math.RandomDataGenerator, lairBranch:string, entrance:ILevelShell):void{
        let lairBranchInfo:IBranchInfo = Branches.branches.get(lairBranch);
        let lastLevel:ILevelShell;
        for(let i:number = 0;i<lairBranchInfo.levels;i++){
            let depth:number = i + 1;
            let levelShell:ILevelShell = GameCreator.getShell(lairBranch, depth, randomGen.integer());

            if(lastLevel){
                lastLevel.linksTo.push(levelShell.id);
                levelShell.linksTo.push(lastLevel.id);
            }else{
                entrance.linksTo.push(levelShell.id);
                levelShell.linksTo.push(entrance.id);
            }
            if(depth==lairBranchInfo.levels){
                levelShell.hasRune = true;
            }
            lastLevel = levelShell;
            levels.set(levelShell.id, levelShell);
        }
    }

    protected static getShell(branch:string, depth:number, seed:number):ILevelShell{
        let levelShell:ILevelShell = {id:branch + depth, branch:branch, depth:depth, linksTo:[], forceThemes:[], seed:seed};

        return levelShell;
    }
}

export interface IGameOptions{
    seed?:number;
    species?:string;
    job?:string;
}