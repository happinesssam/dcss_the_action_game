import Character from "./actors/character";
import Item from "./actors/item";
import { Feature } from "./dungeon/feature";
import { TileEffect } from "./actors/tile-effect";

export default class LevelState{
    public id:string;
    public depth:number;
    public branch:string;

    public ground:number[];
    public walls:boolean[];
    public scenery:Feature[];//walls are scenery with stats. Only visible walls counted
    public seen:boolean[];
    public tileEffects:TileEffect[];//this will be for clouds etc I am assuming there will not be many, so hopefully

    public width:number;
    public height:number;

    public items:Item[];

    public actors:Character[];
}
/**
 * The plan...
 * ground is a simple number, based on it's index in the dungeon atlas used by tileMap.
 * If I need to start worrying about exploding walls I can deal at run time (it will not be often) ditto things like water,
 * which should not need saving anyway
 * ground includes walls.
 * scenery is things like doors, stairs that are semi perminent and can be interactied with
 */ 