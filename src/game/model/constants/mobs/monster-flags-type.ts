export enum MonsterFlagType
{
    MF_NO_FLAGS,
    /// no benefit from killing
    MF_NO_REWARD,
    /// monster skips next available action
    MF_JUST_SUMMONED,
    /// is following player through stairs
    MF_TAKING_STAIRS,

    //                      BIT(3),

    /// Player has already seen monster
    MF_SEEN,
    /// A known shapeshifter.
    MF_KNOWN_SHIFTER,
    /// Monster that has been banished.
    MF_BANISHED,

    /// Summoned, should not drop gear on reset
    MF_HARD_RESET,
    /// mirror to CREATED_FRIENDLY for neutrals
    MF_WAS_NEUTRAL,
    /// Saw player and attitude changed (or not); currently used for holy
    /// beings (good god worshippers -> neutral) orcs (Beogh worshippers
    /// -> friendly), and slimes (Jiyva worshippers -> neutral)
    MF_ATT_CHANGE_ATTEMPT,
    /// Was in view during previous turn.
    MF_WAS_IN_VIEW,

    /// Created as a member of a band
    MF_BAND_MEMBER,
    /// Monter has been pacified
    MF_PACIFIED,
    /// Consider this monster to have MH_UNDEAD holiness, regardless
    /// of its actual type
    MF_FAKE_UNDEAD,
    /// An undead monster soul enslaved by
    /// Yredelemnul's power
    MF_ENSLAVED_SOUL,

    /// mname is a suffix.
    MF_NAME_SUFFIX,
    /// mname is an adjective (prefix).
    MF_NAME_ADJECTIVE,
    /// mname entirely replaces normal monster name.
    MF_NAME_REPLACE,
    /// Is a god gift.
    MF_GOD_GIFT,
    /// Is running away from player sanctuary
    MF_FLEEING_FROM_SANCTUARY,
    /// Is being killed with disintegration
    MF_EXPLODE_KILL,

    // These are based on the flags in monster class, but can be set for
    // monsters that are not normally fighters (in vaults).

    /// Monster is skilled fighter.
    MF_FIGHTER,
    /// Monster wields two weapons.
    MF_TWO_WEAPONS,
    /// Monster gets various archery boosts.
    MF_ARCHER,

                          //BIT(23),
                          //BIT(24),
                          //BIT(25),

    /// This monster cannot regenerate.
    MF_NO_REGEN,

    /// mname should be treated with normal grammar, ie, prevent
    /// "You hit red rat" and other such constructs.
    MF_NAME_DESCRIPTOR,
    /// give this monster the definite "the" article, instead of the
    /// indefinite "a" article.
    MF_NAME_DEFINITE,
    /// living monster revived by a lost soul
    MF_SPECTRALISED,
    /// is a demonic_guardian
    MF_DEMONIC_GUARDIAN,
    /// mname should be used for corpses as well
    MF_NAME_SPECIES,
    /// mname replaces "zombie" etc.; use only for already zombified monsters
    MF_NAME_ZOMBIE,
    /// Player has been warned about this monster being nearby.
    MF_SENSED,
    /// mname should not be used for corpses
    MF_NAME_NOCORPSE,
    /// known to have a ranged attack
    MF_SEEN_RANGED,

    /// this monster has been polymorphed.
    MF_POLYMORPHED,
    /// just got hibernated/slept
    MF_JUST_SLEPT,
    /// possibly got piety with TSO
    MF_TSO_SEEN
};