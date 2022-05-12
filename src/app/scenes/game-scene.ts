import { DungeonGenerator } from "../../game/engine/dungeonGenerator/dungeon-generator";
import LevelState from "../../game/model/level-state";
import { GameInfo } from "../data/game-info";
import GameState from "../../game/model/game-state";
import { BranchNames} from "../../game/data/dungeon/names";
import { GameValues } from "../../game/view/values";
import { DungeonLevelDisplay } from "../../game/view/dungeon-level-display";
import { ILevelShell } from "../../game/model/dungeon/i-level-shell";
import { SceneNames } from "./scene-names";

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
            this.buildLevel(dungeonLevel);
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
        
        DungeonGenerator.getInstance().getDungeonLevel(levelShell, this.newLevelGenerated.bind(this));
    }

    protected newLevelGenerated(dungeonLevel:LevelState):void{
        //new level done!
        //remove pop up and start level

        GameInfo.getInstance().gameState.levels.set(dungeonLevel.id, dungeonLevel);

        this.buildLevel(dungeonLevel);
    }

    protected buildLevel(dungeonLevel:LevelState):void{
        
    }
}