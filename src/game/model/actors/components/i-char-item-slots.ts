import Item from "../item";

export interface ICharItemSlots{
     mainHand?:Item;
     offHand?:Item;
     head?:Item;
     body?:Item;
     gloves?:Item;
     boots?:Item;
     cloak?:Item;
     rings?:Item[];
     amulet?:Item;
}