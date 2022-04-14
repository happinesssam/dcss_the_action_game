import { AssetNames } from "../data/dungeon/names";

/**
 * phaser tilemap simply uses frame indexes, so I need a more readable way of mapping the frame index to the frame in the sprite atlas.
 * I also want something that won't blow up as soon as something changes.
 */
export class DungeonTileHelper{
    private static _instance:DungeonTileHelper;

    public static getInstance():DungeonTileHelper{
        if(!DungeonTileHelper._instance){
            DungeonTileHelper._instance = new DungeonTileHelper();
        }
        return DungeonTileHelper._instance;
    }

    constructor(){
       
    }

    public initTiles(cache:Phaser.Cache.CacheManager):void{
        //this is the json file produced by texturepacker.
        let tiles:{} = cache.json.get(AssetNames.DUNGEON_TILES);
        console.log(tiles);
    }

    public getIndex():number{
        return 0;
    }
}