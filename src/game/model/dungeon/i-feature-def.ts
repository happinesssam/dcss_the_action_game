import { IFeatureInfo } from "./i-feature-info";

export interface IFeatureDef{
    sprite:string;
    infoTemplate?:IFeatureInfo;
    seeThrough:boolean;
    destructable:boolean;
}