export enum FloorType{
    WALKABLE,
    WATER_SHALLOW,
    WATER_DEEP,
    LAVA,
    INPASSABLE
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