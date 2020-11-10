import Character from "../../actors/model/character";
import Item from "../../items/model/item";
import { Feature } from "../feature";

export default class LevelState{
    public id:string;
    public depth:number;
    public branch:string;

    public ground:number[];
    public walls:boolean[];
    public scenery:Feature[];//walls are scenery with stats. Only visible walls counted
    public decorations:number[];
    public seen:boolean[];

    public width:number;
    public height:number;

    public items:Item[];

    public actors:Character[];
}