import { IFeatureDef } from "../../model/dungeon/i-feature-def";

export class FeaturesHelper{
    private static _instance:FeaturesHelper;//yeah, I love static singletons

    protected features:Map<string, IFeatureDef> = new Map<string, IFeatureDef>();

    public static getInstance():FeaturesHelper{
        if(!FeaturesHelper._instance)FeaturesHelper._instance = new FeaturesHelper();

        return FeaturesHelper._instance;
    }

    public getFeatureDef(id:string):IFeatureDef{
        if(this.features.has(id))return this.features.get(id);
        return null;
    }

    public registerFeature(id:string, feature:IFeatureDef):void{
        this.features.set(id, feature);
    }
}