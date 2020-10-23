export class MathsUtil{

    /**
     * 
     * @param percChance A kookey and hackish way of getting a sliding distribution weight towards the beginning
     * @param min 
     * @param max 
     * @param randomGen 
     */
    public static getNumberSliding(percChance:number, min:number, max:number, randomGen:Phaser.Math.RandomDataGenerator):number{
        while(min<max && randomGen.frac()<percChance){
            min++;
        }
        return min;
    }

    public static pickFromWeigths(values:number[], weights:number[], randomGen:Phaser.Math.RandomDataGenerator):number{
        let pullAr:number[] = [];
        values.forEach((val:number, i:number)=>{
            for(let j:number=0;j<weights[i];j++){
                pullAr.push(val);
            }
        });
        return randomGen.pick(pullAr);
    }

    public static selectFromArray<T>(array:T[], numLeft:number, randomGen:Phaser.Math.RandomDataGenerator):T[]{
        const result:T[] = array.concat();
        while(result.length>numLeft){
            result.splice(randomGen.integerInRange(0, result.length), 1);
        }
        return result;
    }
}