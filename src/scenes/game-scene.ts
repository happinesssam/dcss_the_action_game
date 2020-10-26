import { DungeonGenerator } from "../dungeon/dungeon-generator";
import { ILevelShell } from "../dungeon/model/i-level-shell";
import LevelState from "../dungeon/model/level-state";
import { GameInfo } from "../global/GameInfo";
import GameState from "../global/model/game-state";
import { BranchNames, SceneNames } from "../global/names";
import { GameValues } from "../global/values";
import { DungeonLevelDisplay } from "../view/game/dungeon-level-display";

export default class GameScene extends Phaser.Scene{
    protected dungeonDisplay:DungeonLevelDisplay;

    constructor(){
        super(SceneNames.GAME_SCENE);
    }

    public create():void{
        console.log(SceneNames.GAME_SCENE);
        let tiles:Phaser.Tilemaps.Tilemap =  this.make.tilemap({ tileWidth: GameValues.TILE_SIZE, tileHeight: GameValues.TILE_SIZE, width: 25, height: 20});
        this.dungeonDisplay = new DungeonLevelDisplay(tiles);
        this.startDungeon();
    }

    protected startDungeon():void{
        const gameState:GameState = GameInfo.getInstance().gameState;
        let dungeonLevel:LevelState = gameState.levels.get(gameState.player.location);
        if(!dungeonLevel){
            this.getNewLevel(gameState);
        }else{

        }
    }

    protected getNewLevel(gameState:GameState):void{
        //show 'generating level' popup

        let levelShell:ILevelShell = gameState.dungeonShell.get(gameState.player.location);
        if(!levelShell){
            if(gameState.player.location==BranchNames.ENTRANCE){
                levelShell = gameState.dungeonShell.get(BranchNames.DUNGEON + "1");
            }else{
                //pan?
            }
        }
        
        DungeonGenerator.getInstance().getDungeonLevel(levelShell);
    }
}