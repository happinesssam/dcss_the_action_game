import { Branches } from "../../data/dungeon/branches";
import { IBranchInfo } from "../../model/dungeon/i-branch-info";
import { BranchNames } from "../../data/dungeon/names";
import { MathsUtil } from "../utils/math-utils";
import GameState from "../../model/game-state";
import { PlayerCreator } from "./player-creator";
import { ILevelShell, IStairsShell } from "../../model/dungeon/i-level-shell";

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
        const entranceStairs:IStairsShell = {id:BranchNames.ENTRANCE, linkStairs:"string", linkLevel:BranchNames.ENTRANCE,
            isUp:false}
        
       
        let dungeon:IBranchInfo = Branches.branches.get(BranchNames.DUNGEON);
        let lastLevel:ILevelShell;
        for(let i:number = 0;i<dungeon.levels;i++){
            let depth:number = i + 1;
            let levelShell:ILevelShell = GameCreator.getShell(BranchNames.DUNGEON, depth, randomGen.integer());

            if(depth==templeLevel){
                let temple:ILevelShell = GameCreator.getShell(BranchNames.TEMPLE, 1, randomGen.integer());
                GameCreator.linkLevels(temple, levelShell, 1);
                levels.set(temple.id, temple);
            }

            if(depth==lairLevel){
                GameCreator.getLair(levels, randomGen, levelShell);
            }
            if(lastLevel){
                GameCreator.linkLevels(lastLevel, levelShell);
            }else{
                levelShell.linksTo.push(BranchNames.ENTRANCE);
                levelShell.stairs.push(entranceStairs);
            }
            lastLevel = levelShell;
            levels.set(levelShell.id, levelShell);
        }
        return levels;
    }

    /**
     * Adds the stairs to connect 2 levels
     * @param level0 
     * @param level1 
     * @param numStairs 
     */
    protected static linkLevels(level0:ILevelShell, level1:ILevelShell, numStairs:number = 3):void{
        for(let i:number = 0;i<numStairs;i++){
            let stairsId0:string = level0.id + "_" + level1.id + "_" + i;
            let stairsId1:string = level1.id + "_" + level0.id + "_" + i;

            level0.stairs.push({id:stairsId0, linkLevel:level1.id, linkStairs:stairsId1});
            level1.stairs.push({id:stairsId1, linkLevel:level0.id, linkStairs:stairsId0});
        }
        level0.linksTo.push(level1.id);
        level1.linksTo.push(level0.id);
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
                GameCreator.linkLevels(lastLevel, levelShell);
            }else{
                GameCreator.linkLevels(entrance, levelShell, 1);
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
                GameCreator.linkLevels(lastLevel, levelShell);
            }else{
                GameCreator.linkLevels(entrance, levelShell);
            }
            if(depth==lairBranchInfo.levels){
                levelShell.hasRune = true;
            }
            lastLevel = levelShell;
            levels.set(levelShell.id, levelShell);
        }
    }

    protected static getShell(branch:string, depth:number, seed:number):ILevelShell{
        let levelShell:ILevelShell = {id:branch + depth, branch:branch, depth:depth, linksTo:[], forceThemes:[],
             seed:seed, stairs:[]};

        return levelShell;
    }
}

export interface IGameOptions{
    seed?:number;
    species?:string;
    job?:string;
}