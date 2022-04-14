import { IFeatureTile } from "../../../model/dungeonGenerator/tile-def-interfaces";
import { DestructType, ReflectType } from "../../../model/constants/dungeon/tile-properties";

export class TileDefsWalls{
    public static BARS_RED:string = "bars_red";
    public static BEEHIVES:string = "beehives";
    public static BRICK_BROWN_VINES:string = "brick_brown-vines";
    public static BRICK_BROWN:string = "brick_brown";
    public static BRICK_DARK_1:string = "brick_dark_1_";
    public static BRICK_DARK_2:string = "brick_dark_2_";
    public static BRICK_DARK_3:string = "brick_dark_3_";
    public static BRICK_DARK_4:string = "brick_dark_4_";
    public static BRICK_DARK_5:string = "brick_dark_5_";
    public static BRICK_DARK_6:string = "brick_dark_6_";
    public static BRICK_GRAY:string = "brick_gray";
    public static CATACOMBS:string = "catacombs";
    public static CHURCH:string = "church";//the light marble version
    public static COBALT_ROCK:string = "cobalt_rock";

    public static wallsDefs:IFeatureTile[] = [
        {
            id:TileDefsWalls.BARS_RED,texture:"bars_red", variants:8, variantBase:1, seeThrough:false, variant2Digit:true,
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BEEHIVES,texture:"beehives", variants:10, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_BROWN_VINES,texture:"brick_brown-vines", variants:8, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_BROWN,texture:"brick_brown", variants:8, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_DARK_1,texture:"brick_dark_1_", variants:12, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_DARK_2,texture:"brick_dark_2_", variants:12, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_DARK_3,texture:"brick_dark_3_", variants:16, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_DARK_4,texture:"brick_dark_4_", variants:16, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_DARK_5,texture:"brick_dark_5_", variants:20, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_DARK_6,texture:"brick_dark_6_", variants:20, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.BRICK_GRAY,texture:"brick_gray", variants:8, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.CATACOMBS,texture:"catacombs", variants:16, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.CHURCH,texture:"church", variants:5, variantBase:0, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        },
        {
            id:TileDefsWalls.COBALT_ROCK,texture:"cobalt_rock", variants:4, variantBase:1, seeThrough:false, 
            shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC
        }
    ];
}