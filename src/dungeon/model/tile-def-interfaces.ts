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

export enum FloorType{
    WALKABLE,
    WATER_SHALLOW,
    WATER_DEEP,
    LAVA
}

export enum DestructType{
    INDESTRUCTIBLE,
    TOUGH,//only by shatter
    PLANT,//destroyed by hitting + fire
    TREE//destroyed by fire
}
/**
 * How does it relfect bolts (I bet I will never implement this)
 */
export enum ReflectType{
    NO_REFLECT,
    JUST_ELEC,
    ALL_BOLTS
}