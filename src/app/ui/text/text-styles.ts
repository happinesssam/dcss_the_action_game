export class TextStyles{
    public static INFO_BOX:string = "infoBox";

    public static getStyle(styleName:string):Phaser.Types.GameObjects.Text.TextStyle{
        return {
            fontSize:"14px"
        };
    }
}