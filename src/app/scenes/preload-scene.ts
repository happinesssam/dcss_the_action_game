import "phaser";
import { TileDefsWallsAbyss } from "../../game/data/dungeon/tileDefs/tile-defs-walls-abyss";
import { AssetNames, SceneNames } from "../../game/data/dungeon/names";
import { DungeonTileHelper } from "../../game/view/dungeon-tile-helper";
export default class PreloadScene extends Phaser.Scene{

    constructor(){
        super(SceneNames.PRELOAD_SCENE);
;    }

    public preload():void{
        this.load.json({
            key: 'dungeonTiles',
            url: 'assets/tiles/dungeon.json'
        });
        this.load.atlas({
            key: AssetNames.DUNGEON_TILES,
            textureURL: 'assets/tiles/dungeon.png',
            atlasURL: 'assets/tiles/dungeon.json'
        });
    }

    public create():void{
        console.log("PRELOAD SCENE");
        console.log(TileDefsWallsAbyss.wallsDef, this.game.cache);
        DungeonTileHelper.getInstance().initTiles(this.cache);
       // this.scene.start(SceneNames.MAIN_MENU_SCENE);
    }
}