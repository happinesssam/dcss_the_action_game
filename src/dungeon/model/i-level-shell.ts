export interface ILevelShell{
    id:string;
    linksTo:string[];
    branch:string;
    depth:number;
    seed:number;
    forceThemes:string[];
    hasRune?:boolean;
}