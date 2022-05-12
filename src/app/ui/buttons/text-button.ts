import { TextStyles } from "../text/text-styles";
import { ImageButton } from "./image-button";
import { ITextButtonConfig, ITextButtonState } from "./misc/i-text-button-config";

export class TextButton extends ImageButton{
    protected textField: Phaser.GameObjects.Text;
    protected button: Phaser.GameObjects.Image;
    protected down:boolean = false;
    protected over:boolean = false;
    protected buttonState:number = -1;
    protected atlas:string;
    protected upTexture: string;
    protected downTexture: string;
    protected overUpTexture: string;
    protected overDownTexture: string;

    constructor(scene:Phaser.Scene, config:ITextButtonConfig, copy:string = "", x: number = 0, y:number = 0){
        super(scene, config, x, y);

        this.textField = scene.add.text(0, 0, copy, TextStyles.getStyle(config.textStyle));

        this.add(this.textField);  
        
        this.applyStateChange();
    }

    protected get textConfig(): ITextButtonConfig{
        return this.config as ITextButtonConfig;
    }

    protected get textState(): ITextButtonState{
        return this.currentState as ITextButtonState;
    }

    public setText(copy:string):void{
        this.textField.text = copy;
    }

    protected applyStateChange():void{
        super.applyStateChange();
        this.placeTextCenterH(this.textConfig.textAlignOffset.x);
        this.placeTextCenterV(this.textConfig.textAlignOffset.y);
        if(this.textConfig.textAlign){
            if(this.textConfig.textAlign.indexOf("T")!=-1){
                this.placeTextTop(this.textConfig.textAlignOffset.y);
            }else if(this.textConfig.textAlign.indexOf("B")!=-1){
                this.placeTextBottom(this.textConfig.textAlignOffset.y);
            }
            if(this.textConfig.textAlign.indexOf("L")!=-1){
                this.placeTextLeft(this.textConfig.textAlignOffset.x);
            }else if(this.textConfig.textAlign.indexOf("R")!=-1){
                this.placeTextRight(this.textConfig.textAlignOffset.x);
            }
        }
        this.textField.x+=this.textState.textOffset?.x || 0;
        this.textField.y+=this.textState.textOffset?.y || 0;
    }

    protected placeTextLeft(offsetX:number = 0):void{
        this.textField.x = offsetX;
    }

    protected placeTextRight(offsetX:number = 0):void{
        this.textField.x = this.buttonWidth - this.textField.width - offsetX;
    }

    protected placeTextCenterH(offsetX:number = 0): void{
        this.textField.x = (this.buttonWidth - this.textField.width) / 2 + offsetX;
    }

    protected placeTextTop(offsetY:number = 0):void{
        this.textField.y = offsetY;
    }

    protected placeTextBottom(offsetY:number = 0):void{
        this.textField.y = this.buttonHeight - this.textField.height - offsetY;
    }

    protected placeTextCenterV(offsetY:number = 0): void{
        this.textField.y = (this.buttonHeight - this.textField.height) / 2 + offsetY;
    }
}