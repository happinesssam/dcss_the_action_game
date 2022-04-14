import {  IFeatureTile } from "../../../model/dungeonGenerator/tile-def-interfaces";
import { DestructType, ReflectType } from "../../../model/constants/dungeon/tile-properties";

export class TileDefsWallsAbyss{
    public static ABYSS:string = "abyss";//ractually quite red
    public static ABYSS_BLUE:string = "abyss_blue";
    public static ABYSS_BROWN:string = "abyss_brown";
    public static ABYSS_CYAN:string = "abyss_cyan";
    public static ABYSS_DARK_GRAY:string = "abyss_darkgray";
    public static ABYSS_GREEN:string = "abyss_green";
    public static ABYSS_LIGHT_BLUE:string = "abyss_lightblue";
    public static ABYSS_LIGHT_CYAN:string = "abyss_lightcyan";
    public static ABYSS_LIGHT_GRAY:string = "abyss_lightgray";
    public static ABYSS_LIGHT_GREEN:string = "abyss_lightgreen";
    public static ABYSS_LIGHT_MAGENTA:string = "abyss_lightmagenta";
    public static ABYSS_LIGHT_RED:string = "abyss_lightred";
    public static ABYSS_MAGENTA:string = "abyss_magenta";
    public static ABYSS_WHITE:string = "abyss_white";
    public static ABYSS_YELLOW:string = "abyss_yellow";

    public static abyssWallTypes:string[] = [TileDefsWallsAbyss.ABYSS, TileDefsWallsAbyss.ABYSS_BLUE, TileDefsWallsAbyss.ABYSS_BROWN,
    TileDefsWallsAbyss.ABYSS_CYAN, TileDefsWallsAbyss.ABYSS_DARK_GRAY, TileDefsWallsAbyss.ABYSS_GREEN, TileDefsWallsAbyss.ABYSS_LIGHT_BLUE,
    TileDefsWallsAbyss.ABYSS_LIGHT_CYAN, TileDefsWallsAbyss.ABYSS_LIGHT_GRAY, TileDefsWallsAbyss.ABYSS_LIGHT_GREEN, TileDefsWallsAbyss.ABYSS_LIGHT_MAGENTA,
    TileDefsWallsAbyss.ABYSS_LIGHT_RED, TileDefsWallsAbyss.ABYSS_MAGENTA, TileDefsWallsAbyss.ABYSS_WHITE, TileDefsWallsAbyss.ABYSS_YELLOW];

    private static _wallsDefs:IFeatureTile[];

    public static get wallsDef():IFeatureTile[]{
        if(!TileDefsWallsAbyss._wallsDefs){
            TileDefsWallsAbyss._wallsDefs = [];
            TileDefsWallsAbyss.abyssWallTypes.forEach((abyssType:string)=>{
                TileDefsWallsAbyss._wallsDefs.push({
                    id:abyssType, texture:"abyss/" + abyssType, variants:8, variantBase:0, seeThrough:false, 
                    shootThrough:false, destructable:DestructType.INDESTRUCTIBLE, reflectType:ReflectType.JUST_ELEC 
                })
            });
        }
        return TileDefsWallsAbyss._wallsDefs;
    }
}