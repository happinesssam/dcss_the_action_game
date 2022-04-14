import { DestructType, FloorType, ReflectType } from "../constants/dungeon/tile-properties";

/**
 * This is the structure for a tile in a theme to be used by generator, rather than to be used in actual game
 */
export interface ITile{
    id:string;
    texture:string;
    variants:number;
    variantsWeights?:number[];
    variantBase?:number;//some are 0 base, some are    
    variant2Digit?:boolean;//some are 0 base, some are    
}
export interface IFloorTile extends ITile{
    floorType:FloorType;
    hasBorders?:boolean;
}
/**
 * includes walls
 */
export interface IFeatureTile extends ITile{
    seeThrough:boolean;
    shootThrough:boolean;
    destructable:DestructType;
    reflectType:ReflectType;
}

