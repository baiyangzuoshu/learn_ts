export  class   Person{
    public      name:string;
    protected   age:number=26;
    private     _gender:string;
    static PI:number=3.141592654;

    constructor(name:string,gender:string){
        this.name=name;
        this._gender=gender;
    }

    set setGender(gender:string){
        this._gender=gender;
    }

    get getGender(){
        return  this._gender;
    }

    printGender():void{
        console.log(`gender:${this._gender}`);
    }

    static  print():void{
        console.log('我是静态方法!');
    }
}

let p=new Person('maomao','男');
p.setGender='男';
console.log(p.name,p.getGender);

export  class Man extends   Person{
    constructor(name:string,gender:string){
        super(name,gender);
    }

    setName(name:string):void{
        this.name=name;
    }

    setAge(age:number):void{
        this.age=age;
    }
}