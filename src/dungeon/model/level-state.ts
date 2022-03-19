import Character from "../../actors/model/character";
import Item from "../../items/model/item";
import { Feature } from "../feature";
import { ILevelTile } from "./i-level-tile";

export default class LevelState{
    public id:string;
    public depth:number;
    public branch:string;

    public tiles:ILevelTile[];

    public width:number;
    public height:number;

    public items:Item[];

    public actors:Character[];
}//This is designed to be the data saved, so should be minimal 