import { IFloorTile } from "../../../model/dungeonGenerator/tile-def-interfaces";
import { FloorType } from "../../../model/constants/dungeon/tile-properties";

export class TileDefsFloor{
    public static ACIDIC:string = "acidic";
    public static BLACK_COBALT:string = "blackCobalt";
    public static BOG_GREEN:string = "bog_green";
    public static CAGE:string = "cage";
    public static COBBLE_BLOOD:string = "cobble_blood";
    public static CRYPT:string = "crypt";
    public static CRYSTAL:string = "crystal_floor";
    public static DEMONIC_RED:string = "demonic_red";
    public static DIRT:string = "dirt";
    public static ENDLESS_SALT:string = "endless_salt";
    public static ETCHED:string = "etched";
    public static NERVES:string = "nerves";


    public static floorDefs:IFloorTile[] = [
        {
            id:TileDefsFloor.ACIDIC,texture:"acidic_floor", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:TileDefsFloor.BLACK_COBALT, texture:"black_cobalt", variants:12, floorType:FloorType.WALKABLE, variantBase:1, variant2Digit:true
        },
        {
            id:TileDefsFloor.BOG_GREEN, texture:"bog_green", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {//seems to be the red one
            id:TileDefsFloor.CAGE, texture:"cage", variants:6, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:TileDefsFloor.COBBLE_BLOOD, texture:"cobble_blood", variants:12, floorType:FloorType.WALKABLE, variantBase:1
        },
        {//need to work out how to do domino
            id:TileDefsFloor.CRYPT, texture:"crypt", variants:12, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:TileDefsFloor.CRYSTAL, texture:"crystal_floor", variants:6, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:TileDefsFloor.DEMONIC_RED, texture:"demonic_red", variants:9, floorType:FloorType.WALKABLE, variantBase:1
        },
        {//todo dirt has full + compass directions
            id:TileDefsFloor.DIRT, texture:"dirt", variants:3, floorType:FloorType.WALKABLE, variantBase:0, hasBorders:true
        },
        {
            id:TileDefsFloor.ENDLESS_SALT, texture:"endless_salt", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:TileDefsFloor.ETCHED, texture:"etched", variants:6, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:TileDefsFloor.NERVES, texture:"floor_nerves", variants:7, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"vines", texture:"floor_vines", variants:7, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"frozen", texture:"frozen", variants:13, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"gauntlet", texture:"gauntlet", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {//todo need to work out how to deal with all the grass vairants
            id:"grass", texture:"grass/grass", variants:3, floorType:FloorType.WALKABLE, variantBase:0, hasBorders:true
        },
        {
            id:"grassFlowersBlue", texture:"grass/grass_flowers_blue", variants:3, floorType:FloorType.WALKABLE, variantBase:1
        },
        {
            id:"grassFlowersRes", texture:"grass/grass_flowers_red", variants:3, floorType:FloorType.WALKABLE, variantBase:1
        },
        {
            id:"grassFlowersYellow", texture:"grass/grass_flowers_yellow", variants:3, floorType:FloorType.WALKABLE, variantBase:1
        },
        {
            id:"greenBones", texture:"green_bones", variants:12, floorType:FloorType.WALKABLE, variantBase:1, variant2Digit:true
        },
        {
            id:"greyDirt", texture:"grey_dirt", variants:7, floorType:FloorType.WALKABLE, variantBase:0, variant2Digit:true    
        },
        {
            id:"greyDirtB", texture:"grey_dirt_b_", variants:8, floorType:FloorType.WALKABLE, variantBase:0   
        },
        {
            id:"ice", texture:"ice", variants:4, floorType:FloorType.WALKABLE, variantBase:0   
        },
        {
            id:"infernal", texture:"infernal", variants:15, floorType:FloorType.WALKABLE, variantBase:1, variant2Digit:true 
        },
        {
            id:"iron", texture:"iron", variants:6, floorType:FloorType.WALKABLE, variantBase:0 
        },
        {//todo there is a lair b for each tile
            id:"lair", texture:"lair", variants:8, floorType:FloorType.WALKABLE, variantBase:0 
        },
        {
            id:"lava", texture:"lava", variants:12, floorType:FloorType.LAVA, variantBase:0, variant2Digit:true
        },
        {
            id:"lavaSea", texture:"lava_sea00", variants:16, floorType:FloorType.LAVA, variantBase:0, variant2Digit:true
        },
        {
            id:"limestone", texture:"limestone", variants:10, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"marble", texture:"marble_floor", variants:6, floorType:FloorType.WALKABLE, variantBase:1
        },
        {
            id:"mesh", texture:"mesh", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"mosaic", texture:"mosaic", variants:16, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"moss", texture:"moss", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"mud", texture:"mud", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"orc", texture:"orc", variants:8, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"pebbleBrown", texture:"pebble_brown", variants:9, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"pedestal", texture:"pedestal", variants:0, floorType:FloorType.WALKABLE, variantBase:0, hasBorders:true
        },
        {
            id:"grayRect", texture:"rect_gray", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"roughRed", texture:"rough_red", variants:4, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"salt", texture:"salt", variants:6, floorType:FloorType.WALKABLE, variantBase:0
        },
        {
            id:"sand", texture:"sand", variants:8, floorType:FloorType.WALKABLE, variantBase:1
        },
        {
            id:"sandStone", texture:"sandstone_floor", variants:10, floorType:FloorType.WALKABLE, variantBase:0
        }//I am ignoring sigil for now, and actualy stopping.
    ];
}