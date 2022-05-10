import { GameCreator } from "../../game/engine/setup/game-creator";
import { SceneNames } from "../../game/data/dungeon/names";
import GameState from "../../game/model/game-state";
import { GameInfo } from "../data/game-info";
import { TextButton } from "../ui/buttons/text-button";
import { ButtonFactory } from "../ui/buttons/button-factory";
import { Buttons } from "../ui/buttons/misc/buttons";
import { ITextButtonConfig } from "../ui/buttons/misc/i-text-button-config";

export default class MenuScene extends Phaser.Scene{
    constructor(){
        super(SceneNames.MAIN_MENU_SCENE);
    }

    public create():void{
       let button:TextButton = new TextButton(
           this.scene.scene, 
            ButtonFactory.getConfig(Buttons.KENNEY_LONG_BEIGE) as ITextButtonConfig, "Copy");
       button.buttonActive = true;
      //  console.log("button", button);
    }

    protected startNewGame():void{
        GameInfo.getInstance().gameState = GameCreator.getGameState();
        this.scene.start(SceneNames.GAME_SCENE);
    }
}