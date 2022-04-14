import { ICloudInfo } from "./i-cloud-info";
import { IFeatureInfo } from "./i-feature-info";

export interface ILevelTile{
    ground:string;//this is just the string of the image in the atlas
    seen:boolean;
    feature?:string;//this refers to a feature structure. a wall is a feature! Will ref IFeatureTile and come from TileDefsWalls
    featureInfo?:IFeatureInfo;//info specific to a feature on this tile
    decoration?:string;
    cloud?:ICloudInfo;
}
//It would be owrth keeping all this info in a turn based version