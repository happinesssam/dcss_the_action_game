export interface ISpeciesTemplate{
    enum:string,
    monster?:string,
    name:string,
    adjective:string,
    genus:string,
    difficulty:string,
    difficulty_priority:number,
    species_flags:string[],
    aptitudes:Map<string, number>,
    can_swim:boolean,
    str:number,
    int:number,
    dex:number,
    levelup_stat_frequency:number,
    mutations:{"1":{"MUT_SLOW":1,"MUT_HOP":1,"MUT_DAYSTALKER":1},"13":{"MUT_HOP":1}},"recommended_jobs":["JOB_FIGHTER","JOB_BERSERKER","JOB_WARPER","JOB_ARCANE_MARKSMAN","JOB_SUMMONER","JOB_ICE_ELEMENTALIST"]
}
