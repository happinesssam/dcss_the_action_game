import { BranchNames } from "../global/names";
import { IBranchInfo } from "./model/i-branch-info";

export class Branches{
    private static _branches:Map<string, IBranchInfo>;


    public static get branches():Map<string, IBranchInfo>{
        if(!Branches._branches){
            Branches._branches = new Map<string, IBranchInfo>();
            Branches._branches.set(BranchNames.DUNGEON, {id:BranchNames.DUNGEON, level:1, levels:15});
            Branches._branches.set(BranchNames.LAIR, {id:BranchNames.LAIR, level:1, levels:6});
            Branches._branches.set(BranchNames.TEMPLE, {id:BranchNames.LAIR, level:1, levels:1});
            Branches._branches.set(BranchNames.SWAMP, {id:BranchNames.SWAMP, level:1, levels:4});
            Branches._branches.set(BranchNames.SHOALS, {id:BranchNames.SWAMP, level:1, levels:4});
            Branches._branches.set(BranchNames.SNAKE, {id:BranchNames.SWAMP, level:1, levels:4});
            Branches._branches.set(BranchNames.SPIDER, {id:BranchNames.SWAMP, level:1, levels:4});
            Branches._branches.set(BranchNames.SLIME_PITS, {id:BranchNames.SWAMP, level:1, levels:6});
        }
        return Branches._branches;
    }
}