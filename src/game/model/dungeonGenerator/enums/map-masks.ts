export enum MapMasks
{
    MMT_NONE            = 0x0,
    MMT_VAULT           = 0x01,  // This is a square in a vault.
    MMT_NO_ITEM         = 0x02,  // Random items should not be placed here.
    MMT_NO_MONS         = 0x04,  // Random monsters should not be placed here.
    MMT_NO_POOL         = 0x08,  // Pool fixup should not be applied here.
                       // 0x10,  // Unused
    MMT_NO_WALL         = 0x20,  // Wall fixup should not be applied here.
    MMT_OPAQUE          = 0x40,  // Vault may impede connectivity.
    MMT_NO_TRAP         = 0x80,  // No trap generation
    MMT_MIMIC           = 0x100, // Feature mimics
    MMT_NO_MIMIC        = 0x200, // Feature shouldn't be turned into a mimic.
    MMT_WAS_DOOR_MIMIC  = 0x400, // There was a door mimic there.
    MMT_TURNED_TO_FLOOR = 0x800, // This feature was dug, deconstructed or such.
}