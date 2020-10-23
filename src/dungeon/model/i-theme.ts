export interface ITheme{
    
}
/**
 * A theme should contain:
 *  list of tiles that can be used for each feature
 *  ratios for each choice * 
 */
/**
 * tile if they have multiple variants should have ratios for each number
 */
export interface ITheme{
    id:string;
    //A theme will hav allist of allowed tile types for wall. Maybe also values for any generator I might make
    wallTiles:IThemeTileRatio[];
    floorTiles:IThemeTileRatio[];
    decorationTIles:IThemeTileRatio[];
}
export interface IThemeTileRatio{
    tile:string;
    weight:number;
}