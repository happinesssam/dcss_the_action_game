import { SceneNames } from "../global/names";
import { GameValues } from "../global/values";
import { DungeonLevelDisplay } from "../view/game/dungeon-level-display";

export default class GameScene extends Phaser.Scene{
    protected dungeonDisplay:DungeonLevelDisplay;

    constructor(){
        super(SceneNames.GAME_SCENE);
    }

    public create():void{
        let tiles:Phaser.Tilemaps.Tilemap =  this.make.tilemap({ tileWidth: GameValues.TILE_SIZE, tileHeight: GameValues.TILE_SIZE, width: 25, height: 20});
        this.dungeonDisplay = new DungeonLevelDisplay(tiles);
    }
}