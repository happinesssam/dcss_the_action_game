import { ICharItemSlots } from "./components/i-char-item-slots";
import { ICharStats } from "./components/i-char-stats";
import { ICharTemplate } from "./components/i-char-template";
import Entity from "./entity";

export default class Character extends Entity{
    public currentStats:ICharStats;
    public baseStats:ICharStats;
    public template:ICharTemplate;
    public equipment:ICharItemSlots;
    public xp:number;
    public level:number;//is mob HD the same?
}