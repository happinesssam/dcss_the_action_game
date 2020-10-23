import { ICharItemSlots } from "./i-char-item-slots";
import { ICharStats } from "./i-char-stats";
import { ICharTemplate } from "./i-char-template";
import Entity from "../../global/model/entity";

export default class Character extends Entity{
    public currentStats:ICharStats;
    public baseStats:ICharStats;
    public template:ICharTemplate;
    public equipment:ICharItemSlots;
    public xp:number;
    public level:number;//is mob HD the same?
}