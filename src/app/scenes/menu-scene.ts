import { GameCreator } from "../../game/engine/setup/game-creator";
import { SceneNames } from "./scene-names";
import GameState from "../../game/model/game-state";
import { GameInfo } from "../data/game-info";
import { TextButton } from "../ui/buttons/text-button";
import { ButtonFactory } from "../ui/buttons/button-factory";
import { Buttons } from "../ui/buttons/misc/buttons";
import { ITextButtonConfig } from "../ui/buttons/misc/i-text-button-config";
import { ButtonEvents } from "../ui/buttons/misc/button-events";
import { SaveManager } from "../utils/save-manager";

export default class MenuScene extends Phaser.Scene{

    constructor(){
        super(SceneNames.MAIN_MENU_SCENE);
    }

    public create():void{   
        console.log("MENU SCENE");   
        const gameInfo:GameInfo = GameInfo.getInstance();

        let buttonX:number = 300;
        let buttonY:number = 200;
        
        if(gameInfo.gameState){
            const continueButton:TextButton = this.addTextButton(               
                "Continue Game",
                buttonX,
                buttonY,
                this.continueGame.bind(this)
            );
            buttonY+=100;
        }

        const newGame:TextButton = this.addTextButton(               
            "New Game",
            buttonX,
            buttonY,
            this.newGame.bind(this)
        );
        buttonY+=100;

        const resetData:TextButton = this.addTextButton(               
            "Reset Data",
            buttonX,
            buttonY,
            this.resetData.bind(this)
        );
        buttonY+=100;

      //  console.log("button", button);
    }

    protected addTextButton(copy:string, x:number, y:number, callback:()=>void): TextButton{
        const button:TextButton = new TextButton(
            this.scene.scene,
            ButtonFactory.getConfig(Buttons.KENNEY_LONG_BEIGE) as ITextButtonConfig,
            copy,
            x,
            y
        );
        button.addListener(ButtonEvents.UP, callback);
        button.buttonActive = true;
        return button;
    }

    protected continueGame():void{
        alert("continue");
    }

    protected newGame(): void{
        console.log("newGame");
        this.scene.start(SceneNames.CREATE_NEW_GAME_SCENE);
    }

    protected resetData(): void{
        SaveManager.deleteData();
        this.scene.start(SceneNames.BOOT_SCENE);
    }
}