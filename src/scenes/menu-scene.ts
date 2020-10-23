import { GameCreator } from "../engine/game-creator";
import { SceneNames } from "../global/names";
import GameState from "../model/game-state";

export default class MenuScene extends Phaser.Scene{
    constructor(){
        super(SceneNames.MAIN_MENU_SCENE);
    }

    public create():void{
        this.startNewGame();
    }

    protected startNewGame():void{
        let gameState:GameState = GameCreator.getGameState();
    }
}