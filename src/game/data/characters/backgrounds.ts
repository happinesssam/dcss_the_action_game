import { IBackgroundTemplate } from "../../model/actors/components/i-background-template";
import { Spells } from "../actions/spells";
import { WeaponChoice } from "../items/weapon-choice";
import { Skills } from "./skills";
import { Species } from "./species";

export class Backgrounds{
    private static ABYSSAL_KNIGHT:string = "abyssal_knight";
    private static AIR_ELEMENTALIST:string = "air_elementalist";
    private static ARCANE_MARKSMAN:string = "arcane_marksman";


    private static _backgroundsList:IBackgroundTemplate[];

    public static get backgroundsList():IBackgroundTemplate[] {
        if(!this._backgroundsList){
            this._backgroundsList = [];
            this.createBackGrounds();
        }
        return this._backgroundsList;
    }

    private static getBackground(name:string, id:string, description:string, statMods:number[],
        speciesRecommendation:string[], startingSpells:string[], startingEquipment:string[], weaponChoice:string, 
        skillsBoost:(string | number)[]): IBackgroundTemplate {
            const bg:IBackgroundTemplate = {
                name:name,
                id:id,
                description:description,
                statMods:statMods,
                speciesRecommendation:speciesRecommendation,
                startingSpells:startingSpells,
                startingEquipment:startingEquipment,
                skillMods:new Map<string, number>()
            };
            for(let i:number = 0;i<skillsBoost.length;i+=2){
                bg.skillMods.set(skillsBoost[i] as string, skillsBoost[i + 1] as number);
            }
            return bg;
    }

    private static createBackGrounds():void{
        this._backgroundsList.push(this.getBackground(Backgrounds.ABYSSAL_KNIGHT, "AK", "Abyssal Knight",
        [5, 2, 5], [Species.HILL_ORC, Species.PALENTONGA, Species.TROLL, Species.MERFOLK, Species.BASE_DRACONIAN,
            Species.DEMONSPAWN], [Spells.SHOCK,
                Spells.DISCHARGE,
                Spells.SWIFTNESS,
                Spells.AIRSTRIKE], ["robe", "potion of magic"], WeaponChoice.NONE, 
            [Skills.CONJURATIONS, 1, Skills.AIR_MAGIC, 3, Skills.DODGING, 2, Skills.SPELLCASTING, 2, Skills.STEALTH, 2]));
           
        this._backgroundsList.push(this.getBackground(Backgrounds.ABYSSAL_KNIGHT, "AE", "Air Elementalist",
        [0, 7, 5], [Species.DEEP_ELF, Species.TENGU, Species.BASE_DRACONIAN, Species.NAGA, Species.VINE_STALKER,
            Species.DJINNI], [], ["leather armour"], WeaponChoice.PLAIN, 
            [Skills.FIGHTING, 3, Skills.ARMOUR, 1, Skills.DODGING, 1, Skills.INVOCATIONS, 2, Skills.WEAPON, 2]));
           
        this._backgroundsList.push(this.getBackground(Backgrounds.ARCANE_MARKSMAN, "AM", "Arcane Marksman",
        [2, 5, 5], [Species.FORMICID, Species.DEEP_ELF, Species.KOBOLD, Species.SPRIGGAN, Species.GNOLL], [], ["leather armour"], WeaponChoice.PLAIN, 
            [Skills.FIGHTING, 3, Skills.ARMOUR, 1, Skills.DODGING, 1, Skills.INVOCATIONS, 2, Skills.WEAPON, 2]));
    }
}