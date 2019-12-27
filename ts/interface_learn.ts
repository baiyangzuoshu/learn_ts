interface   Person{
    name:string;
    age:number;
    readonly salary:number;
    [propName:string]:any;
}

type Person2={name:string,age:number;}
//interface 可以被继承 ,type不可被继承

let p:Person={
    name:'maomao',
    age:26,
    salary:16000,
    ids:[1,2,'3','4']
};

interface   StudentInterface{
    id:number,
    course:string
}
//继承，但是不同于类继承，必须要重新申明和赋值
class   Man implements  Person,StudentInterface{
    name:string='maomao';
    age:number=26;
    salary:number=16000;
    id:number=100;
    course:string='IT';
    constructor(name:string,age:number){
        //super()不同于类继承
        this.name=name;
        this.age=age;
    }
}

//接口的继承
interface   Employee   extends  Person{

}

const   employee:Employee={
    name:'maomao',
    age:26,
    salary:16000
}