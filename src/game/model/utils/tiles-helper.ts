export class TilesHelper{
    private static _instance:TilesHelper;

    protected spriteIndexes:Map<string, number> = new Map<string, number>();

    public static getInstance():TilesHelper{
        if(!TilesHelper._instance)TilesHelper._instance = new TilesHelper();

        return TilesHelper._instance;
    }

    //this is supposed to be a class that holds info on tiles - put an id and variant in, get the tile or index bck

    public getSpriteIndex(tileId:string, variant:number = -1):number{
        if(!this.spriteIndexes.has(tileId + variant)){
            //check the lists to find index and cache it
        }

        return this.spriteIndexes.get(tileId + variant);
    }
}