import { GameCreator } from "../engine/setup/game-creator";
import { SceneNames } from "../global/names";
import GameState from "../global/model/game-state";
import { GameInfo } from "../global/GameInfo";

export default class MenuScene extends Phaser.Scene{
    constructor(){
        super(SceneNames.MAIN_MENU_SCENE);
    }

    public create():void{
        this.startNewGame();
    }

    protected startNewGame():void{
        GameInfo.getInstance().gameState = GameCreator.getGameState();
        this.scene.start(SceneNames.GAME_SCENE);
    }
}