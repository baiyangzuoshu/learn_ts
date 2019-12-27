export  class   Person{
    public      name:string="maomao";
    protected   age:number=26;
    private     _gender:string="JG";
    static PI:number=3.141592654;

    constructor(){

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