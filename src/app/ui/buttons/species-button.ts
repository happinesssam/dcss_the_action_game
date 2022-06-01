import { ISpeciesTemplate } from "../../../game/model/actors/components/i-species-template";
import { ITextButtonConfig } from "./misc/i-text-button-config";
import { TextButton } from "./text-button";
import { AssetNames } from "../../../global/asset-names";
import { ButtonFactory } from "./button-factory";
import { Buttons } from "./misc/buttons";

export class SpeciesButton extends TextButton{
    public species:ISpeciesTemplate;
    public icon:Phaser.GameObjects.Image;
    //should this be put in main class
    constructor(scene:Phaser.Scene, x: number = 0, y:number = 0){       
        super(scene, ButtonFactory.getConfig(Buttons.SPECIES_BUTTON), "copy", x, y);

        this.icon = scene.add.image(0, 0, AssetNames.DUNGEON_TILES, "");
        this.add(this.icon);
    }

    public setSpecies(species:ISpeciesTemplate): void{
        this.species = species;
        this.setText(species.name);
    }
}