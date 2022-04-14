import LevelState from "../model/level-state";
import { AssetNames } from "../data/dungeon/names";
import { GameValues } from "./values";

export class DungeonLevelDisplay{
    public tiles:Phaser.Tilemaps.Tilemap;

    constructor(tiles:Phaser.Tilemaps.Tilemap){
        this.initTileMap(tiles);
    }

    public initTileMap(tiles:Phaser.Tilemaps.Tilemap):void{
        this.tiles = tiles;
        tiles.addTilesetImage(AssetNames.DUNGEON_TILES, AssetNames.DUNGEON_TILES, GameValues.TILE_SIZE, GameValues.TILE_SIZE);
    }

    public initLevel(levelState:LevelState):void{
        //this.tiles.createFromTiles([]);
    }

    public updateTiles():void{

    }
}