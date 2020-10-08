import Item from "../items/item";

export default class LevelState{
    public id:string;
    public depth:number;
    public branch:string;

    public ground:number[];
    public scenery:number[];
    public decorations:number[];

    public items:Item[];
}