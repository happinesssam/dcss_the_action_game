import "phaser";
export default class PreloadScene extends Phaser.Scene{
    public preload():void{
        this.load.atlas({
            key: 'mainmenu',
            textureURL: 'images/MainMenu.png',
            atlasURL: 'images/MainMenu.json'
        });
    }
}