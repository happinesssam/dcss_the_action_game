import { Species } from "../../../game/data/characters/species";
import { ISpeciesTemplate } from "../../../game/model/actors/components/i-species-template";
import { ButtonEvents } from "../buttons/misc/button-events";
import { SpeciesButton } from "../buttons/species-button";
import { TextButton } from "../buttons/text-button";
import { TextStyles } from "../text/text-styles";

export class ChooseSpeciesPanel extends Phaser.GameObjects.Container{
    private buttons:SpeciesButton[];
    private pageLeft:TextButton;
    private pageRight:TextButton;
    private page:number = 0;
    private speciesInfo:Phaser.GameObjects.Text;
    private readonly BUTTONS_PER_PAGE:number = 9;

    public readonly SPECIES_CHOICE:string = "SPECIES_CHOICE";
    public species:ISpeciesTemplate;

    constructor(scene:Phaser.Scene){
        super(scene);

        this.makeButtons();

        const style:Phaser.Types.GameObjects.Text.TextStyle = TextStyles.getStyle(TextStyles.INFO_BOX);
        style.wordWrap = {width:400};

        this.speciesInfo = scene.add.text(200, 300, "", style);

        this.populateButtons();
    }

    private makeButtons(): void{
        this.buttons = [];
        for(let i:number = 0;i<this.BUTTONS_PER_PAGE;i++){
            let button:SpeciesButton = new SpeciesButton(this.scene, i%3 * 220, Math.floor(i/3) * 70);
            this.buttons.push(button);
            this.add(button);
            button.addListener(ButtonEvents.UP, this.clickButton.bind(this));
        }
    }

    private populateButtons():void{
        const speciesList = Species.speciesList;
        for(let i:number = 0;i<this.BUTTONS_PER_PAGE;i++){
            let index:number = i + this.BUTTONS_PER_PAGE * this.page;
            if(index<speciesList.length){
                this.buttons[i].setSpecies(Species.getSpeciesTemplate(speciesList[index]));
                this.buttons[i].visible = true;
            } else{
                this.buttons[i].visible = false;
            }      
            this.buttons[i].buttonActive = this.buttons[i].visible;      
        }
    }

    private clickButton(button:SpeciesButton): void{
        console.log("click", button);
        this.species = button.species;
        this.speciesInfo.text = button.species.name;
        this.emit(this.SPECIES_CHOICE);
    }
}