import { AssetNames } from "../../../global/asset-names";
import { Buttons } from "./misc/buttons";
import { IImageButtonConfig, IImageButtonState } from "./misc/i-image-button-config";
import { ITextButtonConfig } from "./misc/i-text-button-config";

export class ButtonFactory{
    private static buttons:Map<string, IButtonScaffold>;


    //TODO - not sure I even want to do this
    public static getButton(buttonId:string, scene:Phaser.Scene){
        this.init();
        if(!this.buttons.has(buttonId)){
            return null;
        }
        switch(this.buttons.get(buttonId).type){
            case ButtonType.image:
                return 
                break;
        }
    }

    public static getConfig(buttonId:string) : ITextButtonConfig{
        this.init();
        if(this.buttons.has(buttonId)){
            return this.buttons.get(buttonId).config
        }
        return null;
    }

    private static init():void{
        if(!this.buttons){
            this.buttons = new Map<string, IButtonScaffold>();
            this.makeConfigs();
        }
    }

    private static makeConfigs():void{
        //TODO should probably comes from a JSON or XML def file
        this.addConfig(Buttons.KENNEY_LONG_BEIGE, ButtonType.text, {
            atlas:AssetNames.UI_ASSETS,
            upState:{
                texture: "buttonLong_beige.png"
            },
            downState:{
                texture: "buttonLong_beige_pressed.png",
                offset:{x:0, y:5},
                textOffset:{x:0, y:5}
            },
            textAlignOffset:{x: 0, y:-3}
        } as ITextButtonConfig);

        this.addConfig(Buttons.SPECIES_BUTTON, ButtonType.text, {
            atlas:AssetNames.UI_ASSETS,
            upState:{
                texture: "buttonLong_beige.png"
            },
            downState:{
                texture: "buttonLong_beige_pressed.png",
                offset:{x:0, y:5},
                textOffset:{x:0, y:5}
            },
            textAlign:"LC",
            textAlignOffset:{x: 10, y:-3}
        } as ITextButtonConfig);
    }

    public static addConfig(id:string, type:ButtonType, config:ITextButtonConfig): void{
        this.init();
        this.buttons.set(id, {id:id, type:type, config:config});
    }
}
interface IButtonScaffold{
    id:string;
    type:ButtonType;
    config:ITextButtonConfig;
}
enum ButtonType{
    image,
    text
}