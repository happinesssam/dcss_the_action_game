import Item from "../item";

export interface IBackgroundTemplate{
    name: string;
    id: string;
    description: string;
    statMods:number[];
    skillMods:Map<string, number>;
    speciesRecommendation:string[];
    startingSpells: string[];
    startingEquipment: string[];//This should prob just be a string.
}