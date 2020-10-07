import { CharItemSlots } from "../dataStructure/char-item-slots";
import { CharStats } from "../dataStructure/char-stats";
import { CharTemplate } from "../dataStructure/char-template";
import Entity from "./entity";

export default class Character extends Entity{
    public currentStats:CharStats;
    public baseStats:CharStats;
    public template:CharTemplate;
    public equipment:CharItemSlots;
}