import GameState from "../../game/model/game-state";
import { AppState } from "../data/app-state";

export class SaveManager{
    private static GAME_SAVE:string = "dccsAGameSave";
    private static APP_STATE:string = "appState";

    public static loadAppState(): AppState{
        let save = JSON.parse(localStorage.getItem(SaveManager.APP_STATE));

        return SaveManager.parseAppSave(save);
    }

    public static saveAppState(appState:AppState): void{
        localStorage.setItem(SaveManager.APP_STATE, JSON.stringify(appState));
    }

    private static parseAppSave(rawSave): AppState{
        return new AppState();
    }

    public static loadGame(): GameState{
        let save = JSON.parse(localStorage.getItem(SaveManager.GAME_SAVE));

        return SaveManager.parseGameSave(save);
    }

    public static saveGame(gameState: GameState): void{
        //probably will need to convert to a more save friendly format, then back
        localStorage.setItem(SaveManager.GAME_SAVE, JSON.stringify(gameState));
    }

    protected static parseGameSave(rawSave) :  GameState{
        return new GameState();
    }
}