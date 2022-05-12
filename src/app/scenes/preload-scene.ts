import "phaser";
import { TileDefsWallsAbyss } from "../../game/data/dungeon/tileDefs/tile-defs-walls-abyss";
import { AssetNames} from "../../game/data/dungeon/names";
import { DungeonTileHelper } from "../../game/view/dungeon-tile-helper";
import { SceneNames } from "./scene-names";
export default class PreloadScene extends Phaser.Scene{

    constructor(){
        super(SceneNames.PRELOAD_SCENE);
;    }

    public preload():void{
        //loading this as json as well as with spritesheet to make it easier to access json
        this.load.json({
            key: 'dungeonTiles',
            url: 'assets/tiles/dungeon.json'
        });
        this.load.atlas({
            key: AssetNames.DUNGEON_TILES,
            textureURL: 'assets/tiles/dungeon.png',
            atlasURL: 'assets/tiles/dungeon.json'
        });
        this.load.atlas({
            key: AssetNames.UI_ASSETS,
            textureURL: 'assets/kenny-ui/kenny-ui.png',
            atlasURL: 'assets/kenny-ui/kenny-ui.json'
        });
    }

    public create():void{
        console.log("PRELOAD SCENE");
        //console.log(TileDefsWallsAbyss.wallsDef, this.game.cache);
        DungeonTileHelper.getInstance().initTiles(this.cache);
        this.scene.start(SceneNames.MAIN_MENU_SCENE);
    }
}