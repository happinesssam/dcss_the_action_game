export enum MonsterResistType
{
    MR_NO_FLAGS,

    // resistances
    // Notes:
    // - negative energy is mostly handled via monster::res_negative_energy()
    MR_RES_ELEC,
    MR_RES_POISON ,
    MR_RES_FIRE,
    MR_RES_COLD,
    MR_RES_NEG ,
    MR_RES_ROTTING,
    MR_RES_ACID,

    MR_LAST_MULTI, // must be >= any multi, < any boolean, exact value doesn't matter

    MR_RES_TORMENT,
    MR_RES_PETRIFY,
    MR_RES_DAMNATION ,

    MR_RES_STICKY_FLAME,
    MR_RES_TORNADO,
    MR_RES_STEAM,

    // vulnerabilities
    MR_VUL_WATER,
    MR_VUL_ELEC,
    MR_VUL_POISON,
    MR_VUL_FIRE,
    MR_VUL_COLD
}