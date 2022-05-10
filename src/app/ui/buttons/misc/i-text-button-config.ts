import { ITinyPoint } from "../../../../global/i-tiny-point";
import { IImageButtonConfig, IImageButtonState } from "./i-image-button-config";

export interface ITextButtonConfig extends IImageButtonConfig{
    textStyle?:string;
    textStyleOver?:string;
    textAlign?:string;
    textAlignOffset:ITinyPoint;
    upState:ITextButtonState;
    downState?:ITextButtonState;
    overUpState?:ITextButtonState;
    overDownState?:ITextButtonState;
    disabledState?:ITextButtonState;
}
export interface ITextButtonState extends IImageButtonState{   
    textOffset?:ITinyPoint;
    textStyle?:string;
}