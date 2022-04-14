import "phaser";
import { SceneNames } from "../../game/data/dungeon/names";

export default class BootScene extends Phaser.Scene{

    constructor(){
        super(SceneNames.BOOT_SCENE);
    }

    public preload():void{

    }

    public create():void{
        console.log("BOOT SCENE");
        this.scene.start(SceneNames.PRELOAD_SCENE);        
    }
}