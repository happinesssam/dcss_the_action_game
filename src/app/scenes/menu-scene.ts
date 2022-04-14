import { GameCreator } from "../../game/engine/setup/game-creator";
import { SceneNames } from "../../game/data/dungeon/names";
import GameState from "../../game/model/game-state";
import { GameInfo } from "../data/game-info";

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