export enum MonsterClassFlags{
    M_NO_FLAGS,

    /// monster eats doors
    M_EAT_DOORS,

    /// monster crashes through doors rather than opening
    M_CRASH_DOORS,

    /// monster flies all the time
    M_FLIES,

    /// monster is skilled fighter
    M_FIGHTER ,

    /// do not give (unique) a wand
    M_NO_WAND,

    /// do not give a high tier wand
    M_NO_HT_WAND ,

    /// is created invis
    M_INVIS,

    /// can see invis
    M_SEE_INVIS,

    /// can't be blinded
    M_UNBLINDABLE,

    /// uses talking code
    M_SPEAKS,

    /// monster is perma-confused,
    M_CONFUSED,

    /// monster is batty
    M_BATTY ,

    /// monster can split
    M_SPLITS,

    /// monster dies a few turns after being hit
    M_FRAGILE ,

    /// monster is stationary
    M_STATIONARY,

                        //BIT(15), // was M_BLOOD_SCENT

    /// susceptible to cold; drainable by vampires, splashes blood when hit
    M_COLD_BLOOD,

    /// drainable by vampires, splashes blood when hit
    M_WARM_BLOOD,

    /// uses the 'ghost demon' struct to track stats varying per individual monster
    M_GHOST_DEMON,

    /// monster digs through rock
    M_BURROWS,

    /// monster can submerge
    M_SUBMERGES,

    /// monster is a unique
    M_UNIQUE,

    /// Passive acid splash when hit.
    M_ACID_SPLASH,

    /// gets various archery boosts
    M_ARCHER,

    /// is insubstantial
    M_INSUBSTANTIAL,

    /// wields two weapons at once
    M_TWO_WEAPONS,

    /// has extra-fast regeneration
    M_FAST_REGEN,

    /// cannot regenerate
    M_NO_REGEN ,

    /// uses male pronouns
    M_MALE,

    /// uses female pronouns
    M_FEMALE,

    /// boneless corpses
    M_NO_SKELETON,

    /// worth 0 xp
    M_NO_EXP_GAIN,

    /// can do damage when attacked in melee
    M_SPINY,

                        //BIT(33),

    /// not a valid polymorph target (but can be polymorphed)
    M_NO_POLY_TO,

    /// An ancestor granted by Hepliaklqana
    M_ANCESTOR  ,

                        //BIT(36), // was M_ALWAYS_CORPSE

    /// prefer ranged attacks over melee
    M_PREFER_RANGED,

                        //BIT(38), // was M_ARTIFICIAL

    /// can survive without breathing; immune to asphyxiation and Mephitic Cloud
    M_UNBREATHING,

    /// not fully coded; causes a warning
    M_UNFINISHED,

    M_HERD,

    // has a double-sized tile
    M_TALL_TILE,

                        //BIT(43), // was M_WEB_SENSE

    /// tries to maintain LOS/2 range from its target
    M_MAINTAIN_RANGE,

    /// flesh is not usable for making zombies
    M_NO_ZOMBIE,

    /// cannot be placed by any means, even in the arena, etc.
    M_CANT_SPAWN,

    /// derived undead can't be randomly generated
    M_NO_GEN_DERIVED,

                        //BIT(48),

                        //BIT(49), // was M_HYBRID

                        //BIT(50),

    /// monster is a projectile (just OOD right now)
    M_PROJECTILE,

    /// monster is an "avatar" (no independent attacks, only support)
    M_AVATAR,

                        //BIT(53),

    /// monster is a proxy for a charm/conjuration spell (ball lightning, etc.)
    M_CONJURED,

    /// monster will never harm the player
    M_NO_THREAT,

    /// monster always receives a wand
    M_ALWAYS_WAND ,

    /// uses they/them pronouns
    M_GENDER_NEUTRAL,

    /// is surrounded by a ring of clouds. Only one can be active at a time!
    M_THUNDER_RING,
    M_FIRE_RING
}