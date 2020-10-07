import Entity from "./entity";

export default class Item extends Entity{
    public type:string;
    public amount:number;
    public stacks:boolean;
}