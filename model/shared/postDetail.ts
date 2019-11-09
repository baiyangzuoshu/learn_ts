import  {PostSummary} from './postSummary';
import  {Todo} from './todos';

export class PostDetail extends PostSummary{
    price:number;
    currency:string;
    todo:Todo;
    img:string[];

    constructor(postData:any,todoData:any,postImages:string[]){
        super(postData);
        this.todo=todoData.map((item:any)=>new Todo(item));
        this.price=postData.price;
        this.currency=postData.currency;
        this.img=postImages;
    }
}