import { stringify } from "querystring";

export  class   APIError extends Error{
    name:string;
    message:string;
    status?:number;

    constructor(name:string,message:string,status?:number){
        super();
        this.name=name;
        this.message=message;
    }
}

export  class   PublicInfo{
    constructor(
        message:string,
        public  status:number,
        public  properties?:any){}
}