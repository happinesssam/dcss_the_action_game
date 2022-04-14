import Entity from "../actors/entity";

export class Feature extends Entity{
    public seeThrough:boolean = false;
    public destructable:boolean = false;
    public walkable:boolean = false;
}