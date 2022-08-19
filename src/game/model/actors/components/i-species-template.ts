export interface ISpeciesTemplate{
    id:string,
    monster?:string,
    name:string,
    adjective:string,
    genus:string,
    difficulty:string,
    difficulty_priority:number,
    species_flags:string[],
    aptitudes:{},//Map<string, number>,
    can_swim:boolean,
    stats:number[],
    levelup_stat_frequency:number,
    mutations:{},//Map<number, Map<string, number>>,
    recommended_jobs:string[]
}
