import { Species } from "../../../game/data/characters/species";
import { SpeciesButton } from "../buttons/species-button";

export class ChooseSpeciesPanel extends Phaser.GameObjects.Container{
    private buttons:SpeciesButton[];
    private page:number;
    private readonly BUTTONS_PER_PAGE:number = 9;

    constructor(scene:Phaser.Scene){
        super(scene);

        this.makeButtons();

        this.populateButtons();
    }

    private makeButtons(): void{
        this.buttons = [];
        for(let i:number = 0;i<this.BUTTONS_PER_PAGE;i++){
            let button:SpeciesButton = new SpeciesButton(this.scene, i%3 * 220, Math.floor(i/3) * 70);
            this.buttons.push(button);
            this.add(button);
        }
    }

    private populateButtons():void{
        for(let i:number = 0;i<this.BUTTONS_PER_PAGE;i++){
            this.buttons[i].setSpecies(Species.getSpeciesTemplate(Species.speciesList[i]));
        }
    }
}