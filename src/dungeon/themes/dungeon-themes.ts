import { TileDefsWalls } from "../tileDefs/tile-defs-walls";
import { TileDefsFloor } from "../tileDefs/tile-defs-floor";
import { ITheme } from "../model/i-theme";

export class DungeonThemes{
    private static _themes:ITheme[];

    public static get themes():ITheme[]{
        if(!DungeonThemes._themes){
            DungeonThemes._themes = [];
            DungeonThemes._themes.push({
                id:"dungeon0",
                wallTiles:[{tile:TileDefsWalls.BRICK_DARK_1, weight:5}],
                floorTiles:[{tile:TileDefsFloor.NERVES, weight:5}],
                decorationTIles:[]
            })
        }

        return DungeonThemes._themes;
    }
}