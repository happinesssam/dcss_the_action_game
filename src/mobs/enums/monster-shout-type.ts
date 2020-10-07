export enum MonsterShoutType
{
    S_SILENT,               // silent
    S_SHOUT,                // shout
    S_BARK,                 // bark
    S_HOWL,                 // howl
    S_SHOUT2,               // shout twice (e.g. two-headed ogres)
    S_ROAR,                 // roar
    S_SCREAM,               // scream
    S_BELLOW,               // bellow (yaks)
    S_BLEAT,                // bleat (sheep)
    S_TRUMPET,              // trumpets (elephants)
    S_SCREECH,              // screech
    S_BUZZ,                 // buzz
    S_MOAN,                 // moan
    S_GURGLE,               // gurgle
    S_CROAK,                // frog croak
    S_GROWL,                // for bears
    S_HISS,                 // for reptiles & arachnids. quiet!
    S_DEMON_TAUNT,          // for pandemonium lords
    S_CHERUB,               // for cherubs
    S_SQUEAL,               // pigs
    S_LOUD_ROAR,            // dragons, &c. loud!
    NUM_SHOUTS,

    // Loudness setting for shouts that are only defined in dat/shout.txt
    // Only used for the verb/volume of random demon taunts
    S_VERY_SOFT,
    S_SOFT,
    S_NORMAL,
    S_LOUD,
    S_VERY_LOUD,

    NUM_LOUDNESS,
    S_RANDOM
}