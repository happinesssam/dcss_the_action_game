import GameState from "./model/game-state";

export class GameInfo{
    private static _instance:GameInfo;

    public gameState:GameState;

    public static getInstance():GameInfo{
        if(!GameInfo._instance){
            GameInfo._instance = new GameInfo();
        }
        return GameInfo._instance;
    }
}