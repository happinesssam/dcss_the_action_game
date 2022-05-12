import "phaser";
import { SceneNames } from "./scene-names";
import { AppState } from "../data/app-state";
import { GameInfo } from "../data/game-info";
import { SaveManager } from "../utils/save-manager";

export default class BootScene extends Phaser.Scene{

    constructor(){
        super(SceneNames.BOOT_SCENE);
    }

    public preload():void{

    }

    public create():void{
        console.log("BOOT SCENE");
        let appState:AppState = SaveManager.loadAppState();
        if(!appState){
            //create a new one
            appState = new AppState();
        }
        GameInfo.getInstance().appState = appState;

        GameInfo.getInstance().gameState = SaveManager.loadGame();//if no game it will just be null

        this.scene.start(SceneNames.PRELOAD_SCENE);        
    }
}