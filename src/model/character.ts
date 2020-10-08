import { ICharItemSlots } from "../dataStructure/i-char-item-slots";
import { ICharStats } from "../dataStructure/i-char-stats";
import { ICharTemplate } from "../dataStructure/i-char-template";
import Entity from "./entity";

export default class Character extends Entity{
    public currentStats:ICharStats;
    public baseStats:ICharStats;
    public template:ICharTemplate;
    public equipment:ICharItemSlots;
}