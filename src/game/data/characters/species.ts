import { ISpeciesTemplate } from "../../model/actors/components/i-species-template";

export class Species{
    private static _speciesList:string[];

    public static get speciesList():string[]{
        if(!this._speciesList){
            this._speciesList = [];
            for(const key in this.speciesRaw){
                this._speciesList.push(key);
            }
        }
        return this._speciesList;
    }

    public static getSpeciesTemplate(speciesId:string):ISpeciesTemplate{
        const speciesDataRaw = this.speciesRaw[speciesId];
        return speciesDataRaw;
    }

    public static getAptitudes(speciesId:string):Map<string, number>{
        const speciesDataRaw = this.speciesRaw[speciesId];
         let aptitudes:Map<string, number> = new Map<string, number>();
        if(speciesDataRaw){
            for(const key in speciesDataRaw.aptitude){
                aptitudes.set(key as string, speciesDataRaw.aptitudes[key]);
            }
        }
        return aptitudes;
    }

    public static getMutations(speciesId:string):Map<number, Map<string, number>> {
        const speciesDataRaw = this.speciesRaw[speciesId];
        let mutations:Map<number, Map<string, number>> = new Map<number, Map<string, number>>();
        if(speciesDataRaw){
            for(const gainAtLevel in speciesDataRaw.mutations){
                if(!mutations.has(Number(gainAtLevel))){
                    mutations.set(Number(gainAtLevel), new Map<string, number>());
                }
                const levelMutation: Map<string, number> = mutations.get(Number(gainAtLevel));
                for(const mutation of Object.values(speciesDataRaw.mutations[gainAtLevel])){
                    levelMutation.set(mutation as string, Number(speciesDataRaw.mutations[gainAtLevel]));
                }             
            }
        }
        return mutations;
    }

// species doc from dcss is yaml, turned into a big json object. then I parse it.
    private static speciesRaw = {"SP_BARACHI":{"enum":"SP_BARACHI","monster":"MONS_BARACHI","name":"Barachi","adjective":"Barachian","genus":"Frog","difficulty":"Advanced","difficulty_priority":30,"species_flags":["SPF_NO_HAIR"],"aptitudes":{"xp":0,"hp":0,"mp_mod":0,"mr":3,"fighting":2,"short_blades":1,"long_blades":2,"axes":1,"maces_and_flails":1,"staves":1,"armour":2,"dodging":1,"shields":1,"unarmed_combat":1,"conjurations":1,"hexes":1,"summoning":2,"necromancy":-1,"translocations":1,"transmutations":1,"fire_magic":1,"ice_magic":2,"air_magic":1,"poison_magic":1,"invocations":-1,"evocations":1},"can_swim":true,"str":9,"int":8,"dex":7,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_SLOW":1,"MUT_HOP":1,"MUT_DAYSTALKER":1},"13":{"MUT_HOP":1}},"recommended_jobs":["JOB_FIGHTER","JOB_BERSERKER","JOB_WARPER","JOB_ARCANE_MARKSMAN","JOB_SUMMONER","JOB_ICE_ELEMENTALIST"],"create_enum":false},"SP_DEEP_DWARF":{"enum":"SP_DEEP_DWARF","monster":"MONS_DEEP_DWARF","name":"Deep Dwarf","short_name":"DD","adjective":"Dwarven","genus":"Dwarf","difficulty":"Intermediate","difficulty_priority":20,"aptitudes":{"xp":-1,"hp":2,"mp_mod":0,"mr":6,"fighting":-1,"short_blades":-1,"axes":1,"polearms":-1,"staves":-1,"slings":1,"bows":-3,"crossbows":1,"throwing":-1,"armour":1,"dodging":1,"stealth":3,"shields":1,"unarmed_combat":-1,"spellcasting":-2,"conjurations":-1,"hexes":-2,"summoning":-1,"necromancy":1,"translocations":1,"transmutations":-1,"fire_magic":-1,"ice_magic":-1,"air_magic":-3,"earth_magic":3,"poison_magic":-2,"invocations":3,"evocations":3},"str":11,"int":8,"dex":8,"levelup_stat_frequency":4,"levelup_stats":["str","int"],"mutations":{"1":{"MUT_NO_REGENERATION":1,"MUT_PASSIVE_MAPPING":1},"9":{"MUT_PASSIVE_MAPPING":1},"14":{"MUT_NEGATIVE_ENERGY_RESISTANCE":1},"18":{"MUT_PASSIVE_MAPPING":1}},"fake_mutations":[{"long":"You are resistant to damage.","short":"damage resistance"},{"long":"You can heal yourself by infusing magical energy.","short":"heal wounds"}],"recommended_jobs":["JOB_FIGHTER","JOB_HUNTER","JOB_BERSERKER","JOB_NECROMANCER","JOB_EARTH_ELEMENTALIST"],"recommended_weapons":["SK_MACES_FLAILS","SK_AXES","SK_LONG_BLADES","SK_CROSSBOWS","SK_SLINGS"],"create_enum":false},"SP_DEEP_ELF":{"enum":"SP_DEEP_ELF","monster":"MONS_ELF","name":"Deep Elf","short_name":"DE","adjective":"Elven","genus":"Elf","difficulty":"Intermediate","difficulty_priority":40,"aptitudes":{"xp":-1,"hp":-2,"mp_mod":2,"mr":4,"fighting":-2,"long_blades":-1,"axes":-2,"maces_and_flails":-3,"polearms":-3,"slings":-2,"bows":3,"crossbows":-1,"armour":-2,"dodging":2,"stealth":3,"shields":-2,"unarmed_combat":-2,"spellcasting":3,"conjurations":1,"hexes":3,"summoning":1,"necromancy":2,"translocations":1,"transmutations":1,"fire_magic":1,"ice_magic":1,"earth_magic":1,"poison_magic":1,"invocations":1,"evocations":1},"str":5,"int":12,"dex":10,"levelup_stat_frequency":4,"levelup_stats":["int"],"recommended_jobs":["JOB_WIZARD","JOB_CONJURER","JOB_SUMMONER","JOB_NECROMANCER","JOB_FIRE_ELEMENTALIST","JOB_ICE_ELEMENTALIST","JOB_AIR_ELEMENTALIST","JOB_EARTH_ELEMENTALIST","JOB_VENOM_MAGE"],"recommended_weapons":["SK_SHORT_BLADES","SK_STAVES","SK_BOWS"],"create_enum":false},"SP_DEMIGOD":{"enum":"SP_DEMIGOD","monster":"MONS_DEMIGOD","name":"Demigod","short_name":"Dg","adjective":"Divine","difficulty":"Advanced","difficulty_priority":80,"aptitudes":{"xp":-2,"hp":1,"mp_mod":2,"mr":4,"fighting":-1,"short_blades":-1,"long_blades":-1,"axes":-1,"maces_and_flails":-1,"polearms":-1,"staves":-1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":-1,"dodging":-1,"shields":-1,"unarmed_combat":-1,"spellcasting":-2,"conjurations":-1,"hexes":-1,"summoning":-1,"necromancy":-1,"translocations":-1,"transmutations":-1,"fire_magic":-1,"ice_magic":-1,"air_magic":-1,"earth_magic":-1,"poison_magic":-1,"invocations":false,"evocations":-1},"str":9,"int":10,"dex":9,"levelup_stats":[],"levelup_stat_frequency":28,"mutations":{"1":{"MUT_HIGH_MAGIC":1,"MUT_FORLORN":1,"MUT_DIVINE_ATTRS":1}},"recommended_jobs":["JOB_TRANSMUTER","JOB_CONJURER","JOB_FIRE_ELEMENTALIST","JOB_ICE_ELEMENTALIST","JOB_AIR_ELEMENTALIST","JOB_EARTH_ELEMENTALIST"],"create_enum":false},"SP_DEMONSPAWN":{"enum":"SP_DEMONSPAWN","monster":"MONS_DEMONSPAWN","name":"Demonspawn","short_name":"Ds","adjective":"Demonic","difficulty":"Intermediate","difficulty_priority":80,"aptitudes":{"xp":-1,"hp":0,"mp_mod":0,"mr":3,"short_blades":-1,"long_blades":-1,"axes":-1,"maces_and_flails":-1,"polearms":-1,"staves":-1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":-1,"dodging":-1,"shields":-1,"unarmed_combat":-1,"spellcasting":-1,"necromancy":1,"translocations":-1,"transmutations":-1,"fire_magic":-1,"ice_magic":-1,"air_magic":-1,"earth_magic":-1,"invocations":3},"str":8,"int":9,"dex":8,"levelup_stat_frequency":4,"recommended_jobs":["JOB_GLADIATOR","JOB_BERSERKER","JOB_ABYSSAL_KNIGHT","JOB_WIZARD","JOB_NECROMANCER","JOB_FIRE_ELEMENTALIST","JOB_ICE_ELEMENTALIST","JOB_VENOM_MAGE"],"create_enum":false},"SP_DJINNI":{"enum":"SP_DJINNI","monster":"MONS_DJINNI","name":"Djinni","short_name":"Dj","difficulty":"Intermediate","difficulty_priority":70,"aptitudes":{"xp":1,"hp":-1,"mp_mod":0,"mr":4,"short_blades":-1,"long_blades":-1,"axes":-2,"maces_and_flails":-2,"polearms":-2,"staves":-1,"slings":-2,"bows":-2,"crossbows":-2,"throwing":-2,"spellcasting":-3,"dodging":1,"fire_magic":false,"ice_magic":false,"air_magic":false,"earth_magic":false,"poison_magic":false,"conjurations":false,"hexes":false,"summoning":false,"necromancy":false,"translocations":false,"transmutations":false,"stealth":-1},"str":7,"int":9,"dex":8,"levelup_stat_frequency":4,"levelup_stats":["dex","int"],"mutations":{"1":{"MUT_HEAT_RESISTANCE":2,"MUT_COLD_VULNERABILITY":1,"MUT_FLOAT":1,"MUT_INNATE_CASTER":1,"MUT_HP_CASTING":1,"MUT_FLAT_HP":1}},"fake_mutations":[{"long":"You are immune to sickness and miasma."},{"short":"sickness immunity"}],"recommended_jobs":["JOB_GLADIATOR","JOB_TRANSMUTER","JOB_WIZARD","JOB_FIRE_ELEMENTALIST","JOB_ICE_ELEMENTALIST"],"recommended_weapons":["SK_SHORT_BLADES","SK_LONG_BLADES"],"create_enum":false},"SP_BASE_DRACONIAN":{"enum":"SP_BASE_DRACONIAN","monster":"MONS_DRACONIAN","name":"Draconian","difficulty":"Simple","difficulty_priority":50,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1}},"recommended_jobs":["JOB_BERSERKER","JOB_TRANSMUTER","JOB_CONJURER","JOB_FIRE_ELEMENTALIST","JOB_ICE_ELEMENTALIST","JOB_AIR_ELEMENTALIST","JOB_EARTH_ELEMENTALIST","JOB_VENOM_MAGE"],"create_enum":false},"SP_BLACK_DRACONIAN":{"enum":"SP_BLACK_DRACONIAN","monster":"MONS_BLACK_DRACONIAN","name":"Black Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1,"air_magic":2,"earth_magic":-2},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1},"7":{"MUT_SHOCK_RESISTANCE":1},"14":{"MUT_BIG_WINGS":1}},"fake_mutations":[{"long":"You can breathe wild blasts of lightning.","short":"breathe lightning"}],"create_enum":false},"SP_GREEN_DRACONIAN":{"enum":"SP_GREEN_DRACONIAN","monster":"MONS_GREEN_DRACONIAN","name":"Green Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1,"poison_magic":2},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1},"7":{"MUT_POISON_RESISTANCE":1},"14":{"MUT_STINGER":1}},"fake_mutations":[{"long":"You can breathe blasts of noxious fumes.","short":"breathe noxious fumes"}],"create_enum":false},"SP_GREY_DRACONIAN":{"enum":"SP_GREY_DRACONIAN","monster":"MONS_GREY_DRACONIAN","name":"Grey Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1,"earth_magic":2,"air_magic":-2},"can_swim":true,"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1}},"create_enum":false},"SP_PALE_DRACONIAN":{"enum":"SP_PALE_DRACONIAN","monster":"MONS_PALE_DRACONIAN","name":"Pale Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1,"fire_magic":1,"air_magic":1,"evocations":1},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1},"7":{"MUT_STEAM_RESISTANCE":1}},"fake_mutations":[{"long":"You can breathe blasts of scalding, opaque steam.","short":"breathe steam"}],"create_enum":false},"SP_PURPLE_DRACONIAN":{"enum":"SP_PURPLE_DRACONIAN","monster":"MONS_PURPLE_DRACONIAN","name":"Purple Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":6,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"invocations":1,"spellcasting":1,"hexes":1,"evocations":1},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1}},"fake_mutations":[{"long":"You can breathe bolts of dispelling energy.","short":"breathe power"}],"create_enum":false},"SP_RED_DRACONIAN":{"enum":"SP_RED_DRACONIAN","monster":"MONS_RED_DRACONIAN","name":"Red Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1,"fire_magic":2,"ice_magic":-2},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1},"7":{"MUT_HEAT_RESISTANCE":1}},"fake_mutations":[{"long":"You can breathe blasts of fire.","short":"breathe fire"}],"create_enum":false},"SP_WHITE_DRACONIAN":{"enum":"SP_WHITE_DRACONIAN","monster":"MONS_WHITE_DRACONIAN","name":"White Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1,"fire_magic":-2,"ice_magic":2},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1},"7":{"MUT_COLD_RESISTANCE":1}},"fake_mutations":[{"long":"You can breathe waves of freezing cold which knock back foes.","short":"breathe frost"}],"create_enum":false},"SP_YELLOW_DRACONIAN":{"enum":"SP_YELLOW_DRACONIAN","monster":"MONS_YELLOW_DRACONIAN","name":"Yellow Draconian","short_name":"Dr","adjective":"Draconian","genus":"Draconian","difficulty":false,"species_flags":["SPF_DRACONIAN"],"aptitudes":{"xp":-1,"hp":1,"mp_mod":0,"mr":3,"fighting":1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":false,"dodging":-1,"spellcasting":-1,"hexes":-1,"invocations":1},"str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_COLD_BLOODED":1},"7":{"MUT_ACID_RESISTANCE":1},"14":{"MUT_ACIDIC_BITE":1}},"fake_mutations":[{"long":"You can spit globs of acid.","short":"spit acid"}],"create_enum":false},"SP_FELID":{"enum":"SP_FELID","monster":"MONS_FELID","name":"Felid","adjective":"Feline","genus":"Cat","difficulty":"Advanced","difficulty_priority":40,"aptitudes":{"xp":-1,"hp":-4,"mp_mod":1,"mr":6,"short_blades":false,"long_blades":false,"axes":false,"maces_and_flails":false,"polearms":false,"staves":false,"slings":false,"bows":false,"crossbows":false,"throwing":false,"armour":false,"dodging":3,"stealth":4,"shields":false,"spellcasting":-1,"conjurations":-1,"hexes":4,"translocations":4,"transmutations":1,"fire_magic":-1,"ice_magic":-1,"air_magic":-1,"earth_magic":-1,"poison_magic":-1,"evocations":1},"size":"little","str":4,"int":9,"dex":11,"levelup_stat_frequency":5,"levelup_stats":["int","dex"],"mutations":{"1":{"MUT_NO_GRASPING":1,"MUT_NO_ARMOUR":1,"MUT_MULTILIVED":1,"MUT_FAST":1,"MUT_FANGS":3,"MUT_SHAGGY_FUR":1,"MUT_ACUTE_VISION":1,"MUT_PAWS":1,"MUT_CLAWS":1},"6":{"MUT_SHAGGY_FUR":1},"12":{"MUT_SHAGGY_FUR":1}},"recommended_jobs":["JOB_BERSERKER","JOB_ENCHANTER","JOB_TRANSMUTER","JOB_ICE_ELEMENTALIST","JOB_AIR_ELEMENTALIST","JOB_CONJURER","JOB_SUMMONER","JOB_VENOM_MAGE"],"recommended_weapons":["SK_UNARMED_COMBAT"],"create_enum":false,"altar_action":"sit before"},"SP_FORMICID":{"enum":"SP_FORMICID","monster":"MONS_FORMICID","name":"Formicid","genus":"Ant","difficulty":"Advanced","difficulty_priority":70,"species_flags":["SPF_NO_BONES"],"aptitudes":{"xp":1,"hp":0,"mp_mod":0,"mr":4,"fighting":1,"slings":1,"bows":-2,"armour":1,"dodging":-1,"stealth":3,"shields":3,"conjurations":-1,"hexes":2,"translocations":-1,"transmutations":1,"air_magic":-2,"earth_magic":2,"poison_magic":3,"invocations":2,"evocations":1},"str":12,"int":7,"dex":6,"levelup_stat_frequency":4,"levelup_stats":["str","int"],"mutations":{"1":{"MUT_ANTENNAE":3,"MUT_QUADRUMANOUS":1}},"fake_mutations":[{"long":"You cannot be hasted, slowed, berserked, paralysed or teleported.","short":"permanent stasis"},{"long":"You can dig through walls and to a lower floor.","short":"dig shafts and tunnels"}],"recommended_jobs":["JOB_FIGHTER","JOB_HUNTER","JOB_ABYSSAL_KNIGHT","JOB_ARCANE_MARKSMAN","JOB_EARTH_ELEMENTALIST","JOB_VENOM_MAGE"],"recommended_weapons":["SK_MACES_FLAILS","SK_AXES","SK_POLEARMS","SK_STAVES","SK_CROSSBOWS","SK_SLINGS"],"create_enum":false},"SP_GARGOYLE":{"enum":"SP_GARGOYLE","monster":"MONS_GARGOYLE","name":"Gargoyle","short_name":"Gr","difficulty":"Simple","difficulty_priority":70,"species_flags":["SPF_NO_HAIR"],"aptitudes":{"xp":0,"hp":-2,"mp_mod":0,"mr":3,"fighting":1,"short_blades":-1,"long_blades":-1,"axes":-1,"polearms":-1,"slings":-1,"throwing":-1,"armour":1,"dodging":-2,"stealth":2,"shields":1,"spellcasting":-1,"conjurations":1,"hexes":-1,"summoning":-1,"necromancy":-2,"translocations":-1,"transmutations":-2,"air_magic":-2,"earth_magic":2,"invocations":1,"evocations":-1},"str":11,"int":8,"dex":5,"levelup_stat_frequency":4,"levelup_stats":["str","int"],"mutations":{"1":{"MUT_NEGATIVE_ENERGY_RESISTANCE":1,"MUT_PETRIFICATION_RESISTANCE":1,"MUT_SHOCK_RESISTANCE":1,"MUT_TORMENT_RESISTANCE":1},"14":{"MUT_BIG_WINGS":1}},"fake_mutations":[{"long":"You are immune to sickness and miasma."},{"short":"sickness immunity"}],"recommended_jobs":["JOB_FIGHTER","JOB_GLADIATOR","JOB_MONK","JOB_BERSERKER","JOB_FIRE_ELEMENTALIST","JOB_ICE_ELEMENTALIST","JOB_EARTH_ELEMENTALIST","JOB_VENOM_MAGE"],"recommended_weapons":["SK_MACES_FLAILS","SK_STAVES","SK_BOWS","SK_CROSSBOWS"],"create_enum":false},"SP_GHOUL":{"enum":"SP_GHOUL","monster":"MONS_GHOUL","name":"Ghoul","adjective":"Ghoulish","difficulty":"Simple","difficulty_priority":30,"species_flags":["SPF_NO_HAIR"],"aptitudes":{"xp":0,"hp":1,"mp_mod":-1,"mr":3,"fighting":1,"short_blades":-1,"long_blades":-1,"axes":-1,"maces_and_flails":-1,"polearms":-1,"staves":-1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":-1,"dodging":-1,"stealth":2,"shields":-1,"unarmed_combat":1,"spellcasting":-2,"conjurations":-2,"hexes":-2,"summoning":-1,"translocations":-1,"transmutations":-1,"fire_magic":-2,"ice_magic":1,"air_magic":-2,"earth_magic":1,"invocations":1,"evocations":-1},"undead_type":"US_UNDEAD","str":11,"int":3,"dex":4,"levelup_stat_frequency":5,"levelup_stats":["str"],"mutations":{"1":{"MUT_NEGATIVE_ENERGY_RESISTANCE":3,"MUT_TORMENT_RESISTANCE":2,"MUT_INHIBITED_REGENERATION":1,"MUT_COLD_RESISTANCE":1,"MUT_CLAWS":1,"MUT_DEVOUR_ON_KILL":1}},"recommended_jobs":["JOB_WARPER","JOB_GLADIATOR","JOB_MONK","JOB_NECROMANCER","JOB_ICE_ELEMENTALIST","JOB_EARTH_ELEMENTALIST"],"recommended_weapons":["SK_UNARMED_COMBAT","SK_BOWS","SK_CROSSBOWS","SK_SLINGS"],"create_enum":false},"SP_GNOLL":{"enum":"SP_GNOLL","monster":"MONS_GNOLL","name":"Gnoll","difficulty":"Simple","difficulty_priority":10,"aptitudes":{"xp":0,"hp":0,"mp_mod":0,"mr":3,"fighting":8,"short_blades":8,"long_blades":8,"axes":8,"maces_and_flails":8,"polearms":8,"staves":8,"slings":8,"bows":8,"crossbows":8,"throwing":8,"armour":8,"dodging":8,"stealth":8,"shields":8,"unarmed_combat":8,"spellcasting":8,"conjurations":6,"hexes":6,"summoning":6,"necromancy":6,"translocations":6,"transmutations":6,"fire_magic":6,"ice_magic":6,"air_magic":6,"earth_magic":6,"poison_magic":6,"invocations":9,"evocations":8},"str":7,"int":7,"dex":7,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_STRONG_NOSE":1,"MUT_FANGS":1,"MUT_DISTRIBUTED_TRAINING":1}},"recommended_jobs":["JOB_CINDER_ACOLYTE","JOB_WARPER","JOB_ARCANE_MARKSMAN","JOB_TRANSMUTER","JOB_WANDERER"]},"SP_HALFLING":{"TAG_MAJOR_VERSION":34,"enum":"SP_HALFLING","monster":"MONS_HALFLING","name":"Halfling","difficulty":false,"aptitudes":{"xp":1,"hp":-1,"mp_mod":0,"mr":3,"fighting":-1,"short_blades":2,"maces_and_flails":-1,"polearms":-1,"staves":-2,"slings":4,"bows":1,"crossbows":1,"armour":1,"dodging":1,"stealth":2,"shields":1,"unarmed_combat":-2,"spellcasting":-3,"conjurations":-2,"hexes":-2,"summoning":-2,"necromancy":-2,"translocations":1,"transmutations":-4,"invocations":1},"size":"small","str":9,"int":6,"dex":9,"levelup_stat_frequency":5,"levelup_stats":["dex"],"mutations":{"1":{"MUT_MUTATION_RESISTANCE":1}},"recommended_weapons":["SK_SHORT_BLADES","SK_LONG_BLADES","SK_AXES","SK_SLINGS"],"create_enum":false},"SP_HILL_ORC":{"enum":"SP_HILL_ORC","monster":"MONS_ORC","name":"Hill Orc","short_name":"HO","difficulty":"Simple","difficulty_priority":100,"aptitudes":{"xp":0,"hp":1,"mp_mod":0,"mr":3,"fighting":2,"long_blades":1,"axes":3,"maces_and_flails":1,"polearms":1,"staves":-1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":1,"dodging":-2,"stealth":-1,"shields":1,"unarmed_combat":1,"spellcasting":-3,"translocations":-2,"transmutations":-3,"fire_magic":1,"ice_magic":-1,"air_magic":-2,"poison_magic":-1,"invocations":3},"str":10,"int":8,"dex":6,"levelup_stat_frequency":5,"levelup_stats":["str"],"recommended_jobs":["JOB_FIGHTER","JOB_MONK","JOB_BERSERKER","JOB_ABYSSAL_KNIGHT","JOB_CINDER_ACOLYTE","JOB_FIRE_ELEMENTALIST"],"recommended_weapons":["SK_MACES_FLAILS","SK_AXES","SK_POLEARMS"],"create_enum":false},"SP_HUMAN":{"enum":"SP_HUMAN","monster":"MONS_HUMAN","name":"Human","difficulty":"Intermediate","difficulty_priority":100,"aptitudes":{"xp":1,"hp":0,"mp_mod":0,"mr":3,"stealth":1,"spellcasting":-1,"invocations":1},"str":8,"int":8,"dex":8,"levelup_stat_frequency":4,"recommended_jobs":["JOB_BERSERKER","JOB_CINDER_ACOLYTE","JOB_CONJURER","JOB_NECROMANCER","JOB_ICE_ELEMENTALIST"],"create_enum":false},"SP_KOBOLD":{"enum":"SP_KOBOLD","monster":"MONS_KOBOLD","name":"Kobold","difficulty":"Intermediate","difficulty_priority":90,"aptitudes":{"xp":1,"hp":-2,"mp_mod":0,"mr":3,"fighting":1,"short_blades":3,"long_blades":-2,"axes":-2,"maces_and_flails":-1,"polearms":-2,"staves":-1,"crossbows":3,"throwing":1,"armour":-2,"dodging":2,"stealth":4,"shields":-2,"invocations":1,"evocations":2},"size":"small","str":5,"int":9,"dex":10,"levelup_stat_frequency":5,"mutations":{"1":{"MUT_NIGHTSTALKER":3}},"recommended_jobs":["JOB_BRIGAND","JOB_BERSERKER","JOB_ARCANE_MARKSMAN","JOB_ENCHANTER","JOB_CONJURER","JOB_SUMMONER"],"recommended_weapons":["SK_SHORT_BLADES","SK_MACES_FLAILS","SK_STAVES","SK_CROSSBOWS"],"create_enum":false},"SP_MERFOLK":{"enum":"SP_MERFOLK","monster":"MONS_MERFOLK","name":"Merfolk","short_name":"Mf","adjective":"Merfolkian","difficulty":"Simple","difficulty_priority":80,"aptitudes":{"xp":0,"hp":0,"mp_mod":0,"mr":3,"fighting":1,"short_blades":2,"long_blades":2,"axes":-2,"maces_and_flails":-2,"polearms":3,"staves":-2,"slings":-2,"bows":-2,"crossbows":-2,"armour":-3,"dodging":3,"stealth":2,"unarmed_combat":1,"spellcasting":-1,"conjurations":-2,"necromancy":-2,"translocations":-2,"transmutations":3,"fire_magic":-3,"ice_magic":1,"air_magic":-2,"earth_magic":-2,"poison_magic":1,"invocations":1},"can_swim":true,"str":8,"int":7,"dex":9,"levelup_stat_frequency":5,"mutations":{"1":{"MUT_MERTAIL":1,"MUT_NIMBLE_SWIMMER":2}},"recommended_jobs":["JOB_GLADIATOR","JOB_BERSERKER","JOB_TRANSMUTER","JOB_SUMMONER","JOB_ICE_ELEMENTALIST","JOB_VENOM_MAGE"],"recommended_weapons":["SK_POLEARMS","SK_LONG_BLADES"],"create_enum":false},"SP_MINOTAUR":{"enum":"SP_MINOTAUR","monster":"MONS_MINOTAUR","name":"Minotaur","difficulty":"Simple","difficulty_priority":90,"aptitudes":{"xp":-1,"hp":1,"mp_mod":-1,"mr":3,"fighting":2,"short_blades":1,"long_blades":2,"axes":2,"maces_and_flails":2,"polearms":2,"staves":2,"slings":1,"bows":1,"crossbows":1,"throwing":0,"armour":2,"dodging":1,"stealth":-1,"shields":2,"unarmed_combat":1,"spellcasting":-4,"conjurations":-3,"hexes":-4,"summoning":-3,"necromancy":-3,"translocations":-3,"transmutations":-2,"fire_magic":-3,"ice_magic":-3,"air_magic":-3,"earth_magic":-2,"poison_magic":-3,"evocations":-1},"str":12,"int":5,"dex":5,"levelup_stat_frequency":4,"levelup_stats":["str","dex"],"mutations":{"1":{"MUT_HORNS":2,"MUT_REFLEXIVE_HEADBUTT":1}},"recommended_jobs":["JOB_FIGHTER","JOB_GLADIATOR","JOB_MONK","JOB_HUNTER","JOB_BERSERKER","JOB_ABYSSAL_KNIGHT"],"create_enum":false},"SP_MUMMY":{"enum":"SP_MUMMY","monster":"MONS_MUMMY","name":"Mummy","difficulty":"Advanced","difficulty_priority":20,"aptitudes":{"xp":-1,"hp":0,"mp_mod":0,"mr":5,"short_blades":-2,"long_blades":-2,"axes":-2,"maces_and_flails":-2,"polearms":-2,"staves":-2,"slings":-2,"bows":-2,"crossbows":-2,"throwing":-2,"armour":-2,"dodging":-2,"stealth":-1,"shields":-2,"unarmed_combat":-2,"spellcasting":2,"conjurations":-2,"hexes":-1,"summoning":-2,"translocations":-2,"transmutations":-2,"fire_magic":-2,"ice_magic":-2,"air_magic":-2,"earth_magic":-2,"poison_magic":-2,"invocations":-1,"evocations":-2},"undead_type":"US_UNDEAD","str":11,"int":7,"dex":7,"levelup_stat_frequency":5,"mutations":{"1":{"MUT_NEGATIVE_ENERGY_RESISTANCE":3,"MUT_COLD_RESISTANCE":1,"MUT_TORMENT_RESISTANCE":2,"MUT_NO_DRINK":1,"MUT_HEAT_VULNERABILITY":1},"3":{"MUT_NECRO_ENHANCER":1},"13":{"MUT_NECRO_ENHANCER":1}},"recommended_jobs":["JOB_CINDER_ACOLYTE","JOB_WIZARD","JOB_CONJURER","JOB_NECROMANCER","JOB_ICE_ELEMENTALIST","JOB_SUMMONER"],"create_enum":false},"SP_NAGA":{"enum":"SP_NAGA","monster":"MONS_NAGA","name":"Naga","difficulty":"Advanced","difficulty_priority":60,"species_flags":["SPF_SMALL_TORSO","SPF_BARDING"],"aptitudes":{"xp":0,"hp":2,"mp_mod":0,"mr":5,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":-2,"dodging":-2,"stealth":5,"shields":-1,"spellcasting":-1,"poison_magic":3,"invocations":1},"size":"large","str":10,"int":8,"dex":6,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_CONSTRICTING_TAIL":1,"MUT_ACUTE_VISION":1,"MUT_SLOW":2,"MUT_DEFORMED":1,"MUT_SPIT_POISON":1,"MUT_POISON_RESISTANCE":1},"13":{"MUT_CONSTRICTING_TAIL":1}},"recommended_jobs":["JOB_BERSERKER","JOB_TRANSMUTER","JOB_ENCHANTER","JOB_FIRE_ELEMENTALIST","JOB_ICE_ELEMENTALIST","JOB_WARPER","JOB_WIZARD","JOB_VENOM_MAGE"],"create_enum":false,"walking_verb":"Slither","altar_action":"coil in front of"},"SP_OCTOPODE":{"enum":"SP_OCTOPODE","monster":"MONS_OCTOPODE","name":"Octopode","short_name":"Op","adjective":"Octopoid","genus":"Octopus","difficulty":"Advanced","difficulty_priority":50,"aptitudes":{"xp":0,"hp":-1,"mp_mod":0,"mr":3,"armour":false,"stealth":4,"spellcasting":-1,"poison_magic":2,"invocations":1,"evocations":1},"can_swim":true,"str":7,"int":10,"dex":7,"levelup_stat_frequency":5,"species_flags":["SPF_NO_HAIR","SPF_NO_BONES"],"mutations":{"1":{"MUT_CAMOUFLAGE":1,"MUT_GELATINOUS_BODY":1,"MUT_NIMBLE_SWIMMER":1,"MUT_TENTACLE_ARMS":1}},"fake_mutations":[{"long":"You cannot wear most types of armour.","short":"almost no armour"}],"recommended_jobs":["JOB_TRANSMUTER","JOB_WIZARD","JOB_CONJURER","JOB_BRIGAND","JOB_FIRE_ELEMENTALIST","JOB_EARTH_ELEMENTALIST","JOB_VENOM_MAGE"],"create_enum":false,"walking_verb":"Wriggl","altar_action":"curl up in front of"},"SP_OGRE":{"enum":"SP_OGRE","monster":"MONS_OGRE","name":"Ogre","adjective":"Ogreish","difficulty":"Intermediate","difficulty_priority":30,"aptitudes":{"xp":0,"hp":3,"mp_mod":0,"mr":4,"fighting":3,"short_blades":-1,"long_blades":-1,"maces_and_flails":-1,"slings":-3,"bows":-3,"crossbows":-3,"armour":-2,"dodging":-1,"stealth":-2,"unarmed_combat":-1,"spellcasting":1,"conjurations":-1,"hexes":-1,"summoning":-1,"necromancy":-1,"translocations":-1,"transmutations":-1,"fire_magic":-1,"ice_magic":-1,"air_magic":-1,"earth_magic":-1,"poison_magic":-1,"invocations":1,"evocations":-2},"size":"large","str":11,"int":9,"dex":4,"levelup_stat_frequency":3,"levelup_stats":["str"],"mutations":{"1":{"MUT_TOUGH_SKIN":1}},"recommended_jobs":["JOB_GLADIATOR","JOB_BERSERKER","JOB_CINDER_ACOLYTE","JOB_WIZARD","JOB_AIR_ELEMENTALIST","JOB_FIRE_ELEMENTALIST"],"recommended_weapons":["SK_MACES_FLAILS","SK_POLEARMS","SK_STAVES","SK_AXES"],"create_enum":false},"SP_PALENTONGA":{"enum":"SP_PALENTONGA","monster":"MONS_PALENTONGA","name":"Palentonga","difficulty":"Simple","difficulty_priority":60,"species_flags":["SPF_SMALL_TORSO","SPF_BARDING"],"aptitudes":{"xp":-1,"hp":0,"mp_mod":0,"mr":3,"short_blades":0,"long_blades":0,"axes":0,"maces_and_flails":0,"polearms":-1,"staves":0,"slings":-3,"bows":-2,"crossbows":-2,"throwing":-3,"armour":-2,"dodging":-2,"stealth":-3,"shields":-1,"spellcasting":-1,"conjurations":-1,"hexes":0,"summoning":-2,"necromancy":0,"translocations":0,"transmutations":0,"fire_magic":-2,"ice_magic":-2,"air_magic":-2,"earth_magic":-1,"poison_magic":-2,"invocations":1,"evocations":-1},"size":"large","str":11,"int":8,"dex":5,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_RUGGED_BROWN_SCALES":3,"MUT_ARMOURED_TAIL":1,"MUT_ACUTE_VISION":1,"MUT_DEFORMED":1,"MUT_ROLL":1},"7":{"MUT_CURL":1}},"recommended_jobs":["JOB_FIGHTER","JOB_BERSERKER","JOB_ABYSSAL_KNIGHT","JOB_WARPER","JOB_WIZARD"],"recommended_weapons":["SK_UNARMED_COMBAT","SK_MACES_FLAILS","SK_AXES","SK_STAVES"]},"SP_SPRIGGAN":{"enum":"SP_SPRIGGAN","monster":"MONS_SPRIGGAN","name":"Spriggan","difficulty":"Intermediate","difficulty_priority":60,"aptitudes":{"xp":-1,"hp":-3,"mp_mod":1,"mr":7,"fighting":-2,"short_blades":1,"long_blades":-2,"axes":-2,"maces_and_flails":-3,"polearms":-3,"staves":-3,"slings":2,"bows":2,"armour":-3,"dodging":3,"stealth":5,"shields":-3,"unarmed_combat":-2,"spellcasting":2,"conjurations":-3,"hexes":2,"summoning":-2,"necromancy":-1,"translocations":4,"transmutations":3,"fire_magic":-2,"ice_magic":-2,"air_magic":-1,"earth_magic":-1,"evocations":3},"size":"little","str":4,"int":9,"dex":10,"levelup_stat_frequency":5,"levelup_stats":["int","dex"],"mutations":{"1":{"MUT_FAST":3,"MUT_ACUTE_VISION":1}},"recommended_jobs":["JOB_BRIGAND","JOB_ARTIFICER","JOB_ABYSSAL_KNIGHT","JOB_WARPER","JOB_ENCHANTER","JOB_CONJURER","JOB_EARTH_ELEMENTALIST","JOB_VENOM_MAGE"],"recommended_weapons":["SK_SHORT_BLADES","SK_SLINGS"],"create_enum":false},"SP_TENGU":{"enum":"SP_TENGU","monster":"MONS_TENGU","name":"Tengu","difficulty":"Intermediate","difficulty_priority":50,"species_flags":["SPF_NO_HAIR"],"aptitudes":{"xp":0,"hp":-2,"mp_mod":1,"mr":3,"short_blades":1,"long_blades":1,"axes":1,"maces_and_flails":1,"polearms":1,"staves":1,"bows":1,"crossbows":1,"armour":1,"dodging":1,"stealth":1,"unarmed_combat":1,"spellcasting":-1,"conjurations":3,"hexes":-3,"summoning":2,"necromancy":1,"translocations":-2,"transmutations":-2,"fire_magic":1,"ice_magic":-1,"air_magic":3,"earth_magic":-3,"invocations":-1},"str":8,"int":8,"dex":9,"levelup_stat_frequency":4,"mutations":{"1":{"MUT_BEAK":1,"MUT_TALONS":3},"5":{"MUT_TENGU_FLIGHT":1}},"recommended_jobs":["JOB_BERSERKER","JOB_WIZARD","JOB_CONJURER","JOB_SUMMONER","JOB_FIRE_ELEMENTALIST","JOB_AIR_ELEMENTALIST","JOB_VENOM_MAGE"],"recommended_weapons":["SK_MACES_FLAILS","SK_AXES","SK_POLEARMS","SK_LONG_BLADES","SK_STAVES","SK_BOWS","SK_CROSSBOWS"],"create_enum":false,"walking_verb":"Glid"},"SP_TROLL":{"enum":"SP_TROLL","monster":"MONS_TROLL","name":"Troll","adjective":"Trollish","difficulty":"Simple","difficulty_priority":40,"aptitudes":{"xp":-1,"hp":3,"mp_mod":-1,"mr":3,"fighting":-2,"short_blades":-2,"long_blades":-2,"axes":-2,"maces_and_flails":-1,"polearms":-2,"staves":-2,"slings":-4,"bows":-4,"crossbows":-4,"throwing":-1,"armour":-2,"dodging":-2,"stealth":-5,"shields":-1,"spellcasting":-5,"conjurations":-3,"hexes":-4,"summoning":-3,"necromancy":-2,"translocations":-3,"transmutations":-3,"fire_magic":-3,"ice_magic":-3,"air_magic":-4,"earth_magic":-1,"poison_magic":-3,"invocations":-1,"evocations":-3},"size":"large","str":15,"int":4,"dex":5,"levelup_stat_frequency":3,"levelup_stats":["str"],"mutations":{"1":{"MUT_TOUGH_SKIN":1,"MUT_REGENERATION":1,"MUT_CLAWS":3,"MUT_SHAGGY_FUR":1}},"recommended_jobs":["JOB_FIGHTER","JOB_GLADIATOR","JOB_BERSERKER","JOB_WARPER","JOB_EARTH_ELEMENTALIST","JOB_WIZARD"],"recommended_weapons":["SK_MACES_FLAILS","SK_UNARMED_COMBAT"],"create_enum":false},"SP_VAMPIRE":{"enum":"SP_VAMPIRE","monster":"MONS_VAMPIRE","name":"Vampire","short_name":"Vp","adjective":"Vampiric","difficulty":"Advanced","difficulty_priority":90,"aptitudes":{"xp":-1,"hp":0,"mp_mod":0,"mr":4,"fighting":-1,"short_blades":1,"axes":-1,"maces_and_flails":-2,"polearms":-1,"staves":-2,"slings":-2,"bows":-2,"crossbows":-2,"throwing":-2,"armour":-2,"dodging":1,"stealth":5,"shields":-1,"unarmed_combat":1,"spellcasting":-1,"conjurations":-3,"hexes":4,"necromancy":1,"translocations":-2,"transmutations":1,"fire_magic":-2,"poison_magic":-1,"invocations":-1,"evocations":-1},"undead_type":"US_SEMI_UNDEAD","str":7,"int":10,"dex":9,"levelup_stat_frequency":5,"levelup_stats":["int","dex"],"mutations":{"1":{"MUT_FANGS":3,"MUT_ACUTE_VISION":1,"MUT_VAMPIRISM":1},"3":{"MUT_VAMPIRISM":1}},"recommended_jobs":["JOB_GLADIATOR","JOB_BRIGAND","JOB_ENCHANTER","JOB_NECROMANCER","JOB_EARTH_ELEMENTALIST","JOB_ICE_ELEMENTALIST"],"recommended_weapons":["SK_SHORT_BLADES","SK_AXES","SK_LONG_BLADES","SK_BOWS","SK_CROSSBOWS","SK_SLINGS"],"create_enum":false},"SP_VINE_STALKER":{"enum":"SP_VINE_STALKER","monster":"MONS_VINE_STALKER","name":"Vine Stalker","short_name":"VS","difficulty":"Advanced","difficulty_priority":100,"aptitudes":{"xp":0,"hp":-3,"mp_mod":1,"mr":5,"fighting":-1,"short_blades":-1,"long_blades":-1,"axes":-1,"maces_and_flails":-1,"polearms":-1,"staves":-1,"slings":-1,"bows":-1,"crossbows":-1,"throwing":-1,"armour":-2,"dodging":-2,"stealth":3,"shields":-1,"evocations":-1},"str":10,"int":8,"dex":9,"levelup_stat_frequency":4,"levelup_stats":["str","dex"],"mutations":{"1":{"MUT_FANGS":2,"MUT_MANA_SHIELD":1,"MUT_ANTIMAGIC_BITE":1,"MUT_NO_POTION_HEAL":2},"4":{"MUT_REGENERATION":1},"8":{"MUT_FANGS":1}},"recommended_jobs":["JOB_FIGHTER","JOB_BRIGAND","JOB_BERSERKER","JOB_ENCHANTER","JOB_CONJURER","JOB_NECROMANCER","JOB_ICE_ELEMENTALIST"],"recommended_weapons":["SK_MACES_FLAILS","SK_AXES","SK_POLEARMS","SK_LONG_BLADES","SK_STAVES","SK_BOWS","SK_CROSSBOWS"],"create_enum":false,"walking_verb":"Stalk"}};
}