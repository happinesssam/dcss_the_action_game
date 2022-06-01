import { GameCreator, IGameOptions } from "../../game/engine/setup/game-creator";
import GameState from "../../game/model/game-state";
import { GameInfo } from "../data/game-info";
import { ChooseSpeciesPanel } from "../ui/createNewGameElements/choose-species-panel";
import { SaveManager } from "../utils/save-manager";
import { SceneNames } from "./scene-names";

/**
 * Eventually I want a species + background select, exactly as in DCSS
 */
export default class CreateNewGameScene extends Phaser.Scene{
    private gameOptions:IGameOptions;
    private chooseSpeciesPanel:ChooseSpeciesPanel;

    constructor(){
        super(SceneNames.CREATE_NEW_GAME_SCENE);
    }
    public create():void{
        //add a loading image if I can be bothered
        this.gameOptions = {};
        console.log(SceneNames.CREATE_NEW_GAME_SCENE);
        this.showChooseSpecies();
    }

    protected showChooseSpecies():void{
        this.chooseSpeciesPanel = new ChooseSpeciesPanel(this.scene.scene);
        this.add.existing(this.chooseSpeciesPanel);
       // this.showChooseJob();
    }

    protected showChooseJob(): void{
        this.createGame();
    }

    protected createGame(): void{
        const gameState:GameState = GameCreator.getGameState(this.gameOptions);
        GameInfo.getInstance().gameState = gameState;
        SaveManager.saveGame(gameState);
        console.log(gameState);
        this.scene.start(SceneNames.LEVEL_PREPARE_SCENE);
    }
}