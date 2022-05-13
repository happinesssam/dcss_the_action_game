import { SceneNames } from "./scene-names";

/**
 * A scene to cleanup and prepare levels/game before going to next level.
 * Makes sense to be own scene so as to clean up between levels
 */
export default class LevelPrepareScene extends Phaser.Scene{
    constructor(){
        super(SceneNames.LEVEL_PREPARE_SCENE);
    }

    public create():void{
        //add a spinner or something

        
    }
}