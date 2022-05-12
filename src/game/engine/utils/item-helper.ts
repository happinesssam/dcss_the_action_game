import Character from "../../model/actors/character";
import Item from "../../model/actors/item";

export default class ItemHelper{

    public static canUseEquipItem(char:Character, item:Item):boolean{
        return true;
    }

    public static canUseEquip(char:Character, item:Item):boolean{
        return true;
    }

    public static equipItem(char:Character, item:Item):boolean{
        return true;
    }
}