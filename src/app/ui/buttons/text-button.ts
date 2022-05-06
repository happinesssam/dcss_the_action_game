import { AssetNames } from "../../../game/data/dungeon/names";
import { TextStyles } from "../text/text-styles";
import { PointerEvents } from "./pointer-events";

export class TextButton extends Phaser.GameObjects.Group{
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

    constructor(scene:Phaser.Scene, config:ITextButtonConfig){
        super(scene);

        this.atlas = config.atlas || AssetNames.UI_ASSETS;//yes, all state need to be on same atlas

        this.upTexture = config.upState || "buttonLong_beige.png";
        this.overUpTexture = config.overUpState || "";
        this.downTexture = config.downState || "buttonLong_beige_pressed.png";
        this.overDownTexture = config.overDownState || "";

        this.button = scene.add.image(0, 0, this.atlas, this.upTexture);
        this.add(this.button);

        let copy:string =  config.copy || "text";

        this.textField = scene.add.text(0, 0, copy, TextStyles.getStyle(config.textStyle));

        this.add(this.textField);

        this.setXY(100, 100);

        this.addListeners();
        this.button.setInteractive();
    }
//TODO farm all this stuff out onto an abstract button class
    protected addListeners():void{
        this.button.on(PointerEvents.OVER, this.onOver.bind(this));
        this.button.on(PointerEvents.OUT, this.onOut.bind(this));
        this.button.on(PointerEvents.DOWN, this.onDown.bind(this));
        this.button.on(PointerEvents.UP, this.onUp.bind(this));
        this.button.on(PointerEvents.UP_OUTSIDE, this.onUpOutside.bind(this));
    }

    protected checkState(): void{
        const newState:number = (this.down ? 1 : 0) + (this.over ? 2 : 0);//binary
        if(newState!=this.buttonState){
            switch(newState){
                case 0://up, not over
                this.displayOutUp();
                    break;
                case 1://down, not over
                this.displayOutDown();
                    break;
                case 2://over, up
                this.displayOverUp();
                    break;
                case 3://over down
                this.displayOverDown();
                    break;
            }
            this.buttonState = newState;
        }       
    }

    protected onOver(event:Event):void{
        this.over = true;
        this.checkState();
    }

    protected onOut(event:Event):void{
        this.over = false;
        this.checkState();
    }

    protected onDown(event:Event):void{
        this.down = true;
        this.checkState();
    }
    
    protected onUp(event:Event):void{
        this.down = false;
        this.checkState();
    }
    
    protected onUpOutside(event:Event):void{
        this.down = this.over = false;
        this.checkState();
    }
    
    protected displayOverUp(): void{
        if(this.overUpTexture?.length){
            this.button.setFrame( this.overUpTexture, true);
        }else{
            this.displayOutUp();
        }
    }
    
    protected displayOverDown():void{
        if(this.overDownTexture?.length){
            this.button.setFrame( this.overUpTexture, true);
        }else{
            this.displayOutDown();
        }
    }

    protected displayOutDown():void{
        if(this.downTexture?.length){
            this.button.setFrame( this.downTexture, true);
        }else{
            this.displayOutUp();
        }
    }

    protected displayOutUp(): void{
        this.button.setFrame( this.upTexture, true);
    }
}
export interface ITextButtonConfig{
    x?:number;
    y?:number;
    copy?:string;
    atlas?:string;
    upState?:string;
    downState?:string;
    overUpState?:string;
    overDownState?:string;
    textStyle?:string;
    textStyleOver?:string;
    downTextOffset?:number;
    width?:number;
    height?:number;
}