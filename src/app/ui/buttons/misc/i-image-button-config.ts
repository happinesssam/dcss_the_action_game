import { ITinyPoint } from "../../../../global/i-tiny-point";

export interface IImageButtonConfig{
    atlas:string;
    upState:IImageButtonState;
    downState?:IImageButtonState;
    overUpState?:IImageButtonState;
    overDownState?:IImageButtonState;
    disabledState?:IImageButtonState;
    width?:number;
    height?:number;
}
export interface IImageButtonState{   
    texture:string;
    offset?:ITinyPoint;
    fitToParent?:boolean;
}