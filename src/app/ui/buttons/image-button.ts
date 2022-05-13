import { ButtonEvents } from "./misc/button-events";
import { IImageButtonConfig, IImageButtonState } from "./misc/i-image-button-config";
import { PointerEvents } from "./misc/pointer-events";

export class ImageButton extends Phaser.GameObjects.Container{
    protected button: Phaser.GameObjects.Image;
    protected down:boolean = false;
    protected over:boolean = false;
    protected buttonState:number = -1;
    protected _selected:boolean = false;
    protected _buttonActive:boolean;
    protected config:IImageButtonConfig;
    protected currentState:IImageButtonState;

    constructor(scene:Phaser.Scene, config:IImageButtonConfig, x: number = 0, y:number = 0){
        super(scene);

        this.config = config;

        this.button = scene.add.image(0, 0, config.atlas, config.upState.texture);
        this.currentState = config.upState;
        this.button.setOrigin(0, 0);
        this.add(this.button);

        this.x = x;
        this.y = y;

        this.addListeners();

        this.scene.add.existing(this);
    }

    public set buttonActive(value:boolean){
        if(value!=this._buttonActive){
             this._buttonActive = value;
             if(value){
                 this.button.setInteractive();
             }else{
                 this.button.disableInteractive();
             }
             this.checkState();
        }       
    }

    public get buttonActive():boolean{
        return this._buttonActive;
    }

    public get buttonWidth(): number{
        return this.config.width ? this.config.width : this.button.width;
    }

    public get buttonHeight(): number{
        return this.config.height ? this.config.height : this.button.height;
    }

    public get selected():boolean{
        return this._selected;
    }

    public set selected(value:boolean){
        if(value!=this._selected){
            this._selected = value;
            this.checkState();
        }
    }

    protected addListeners():void{
        this.button.on(PointerEvents.OVER, this.onOver.bind(this));
        this.button.on(PointerEvents.OUT, this.onOut.bind(this));
        this.button.on(PointerEvents.DOWN, this.onDown.bind(this));
        this.button.on(PointerEvents.UP, this.onUp.bind(this));
        this.button.on(PointerEvents.UP_OUTSIDE, this.onUpOutside.bind(this));
    }

    protected onOver(event:Event):void{
        this.over = true;
        this.checkState();
        this.emit(ButtonEvents.OVER, this);
    }

    protected onOut(event:Event):void{
        this.over = false;
        this.checkState();
        this.emit(ButtonEvents.OUT, this);
    }

    protected onDown(event:Event):void{
        this.down = true;
        this.checkState();
        this.emit(ButtonEvents.DOWN, this);
    }
    
    protected onUp(event:Event):void{
        this.down = false;
        this.checkState();
        this.emit(ButtonEvents.UP, this);
    }
    
    protected onUpOutside(event:Event):void{
        this.down = this.over = false;
        this.checkState();
        this.emit(ButtonEvents.UP_OUTSIDE, this);
    }

    protected checkState(): void{
        if(this._buttonActive){
            const newState:number = (this.down ? 1 : 0) + (this.over ? 2 : 0);//binary
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
        }else{
            this.displayState(this.config.disabledState ? this.config.disabledState : this.config.upState);
        }
    }

    protected displayOverUp(): void{
        if(this.config.overUpState){
            this.displayState(this.config.overUpState);
        }else{
            this.displayOutUp();
        }
    }
    
    protected displayOverDown():void{
        if(this.config.overDownState){
            this.displayState(this.config.overDownState);
        }else{
            this.displayOutDown();
        }
    }

    protected displayOutDown():void{
        if(this.config.downState){
            this.displayState(this.config.downState);
        }else{
            this.displayOutUp();
        }
    }

    protected displayOutUp(): void{
        this.displayState(this.config.upState);
    }

    protected displayState(state:IImageButtonState):void{
        if(state!=this.currentState){
            this.currentState = state;
            this. applyStateChange();
        }
    }

    protected applyStateChange():void{
        this.button.setFrame(this.currentState.texture, false);
            if(this.currentState.offset){
                this.button.x = this.currentState.offset.x;
                this.button.y = this.currentState.offset.y;
            }else{
                this.button.x = 0;
                this.button.y = 0;
            }
    }
}