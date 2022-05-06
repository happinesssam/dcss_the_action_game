import GameState from "../../game/model/game-state";
import { AppState } from "./app-state";

export class GameInfo{
    private static _instance:GameInfo;

    public gameState:GameState;
    public appState:AppState;

    public static getInstance():GameInfo{
        if(!GameInfo._instance){
            GameInfo._instance = new GameInfo();
        }
        return GameInfo._instance;
    }
}