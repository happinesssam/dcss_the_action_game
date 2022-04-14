export interface ILevelShell{
    id:string;
    linksTo:string[];
    stairs:IStairsShell[];
    branch:string;
    depth:number;
    seed:number;
    forceThemes:string[];
    hasRune?:boolean;
}
export interface IStairsShell{
    id:string;
    linkStairs:string;
    linkLevel:string;
    isUp?:boolean;
}