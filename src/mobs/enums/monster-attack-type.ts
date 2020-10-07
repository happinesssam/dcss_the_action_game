export enum AttackType
{
    AT_NONE,
    AT_HIT,         // Including weapon attacks.
    AT_FIRST_ATTACK = AT_HIT,
    AT_BITE,
    AT_STING,
    AT_SPORE,
    AT_TOUCH,
    AT_ENGULF,
    AT_CLAW,
    AT_PECK,
    AT_HEADBUTT,
    AT_PUNCH,
    AT_KICK,
    AT_TENTACLE_SLAP,
    AT_TAIL_SLAP,
    AT_GORE,
    AT_CONSTRICT,
    AT_TRAMPLE,
    AT_TRUNK_SLAP,
    AT_SNAP,
    AT_SPLASH,
    AT_POUNCE,
    AT_REACH_STING,
    AT_CHERUB,
    AT_SHOOT,
    AT_WEAP_ONLY,   // AT_HIT if wielding a melee weapon, AT_NONE otherwise
    AT_RANDOM,      // Anything but AT_SHOOT and AT_WEAP_ONLY.
    NUM_ATTACK_TYPES,
}