import {ITinyPoint} from '../../../global/i-tiny-point';
export default class Entity{
    public position:ITinyPoint;
    public id:string;

    constructor(x:number = 0, y:number = 0, id:string = ""){
        this.position = {x:x, y:y};
        this.id = id;
    }
} 