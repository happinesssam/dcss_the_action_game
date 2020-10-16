import "phaser";
import { AssetNames, SceneNames } from "../global/names";
import { DungeonTileHelper } from "../view/game/dungeon-tile-helper";
export default class PreloadScene extends Phaser.Scene{

    constructor(){
        super(SceneNames.PRELOAD_SCENE);
;    }

    public preload():void{
        this.load.atlas({
            key: AssetNames.DUNGEON_TILES,
            textureURL: 'assets/tiles/dungeon.png',
            atlasURL: 'assets/tiles/dungeon.json'
        });
    }

    public create():void{
        console.log("PRELOAD SCENE");
        DungeonTileHelper.getInstance().initTiles(this.cache);
        this.scene.start(SceneNames.MAIN_MENU_SCENE);
    }
}