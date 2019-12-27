//基础类型
let num=25;
let flo=25.5;
let hex=0xf000;
let binary=0b1001;
let octal=0o7333;

let str:string='maomao';

let arr:number[]=[1,2,3,45];

let strArr:string[]=['1','2','4'];

let sunValue:{money:number,count:(val:number)=>void}={
    money:200,
    count:function(value:number){
        this.money+=value;
    }
};

type HandleCount={name:string,sumValue:{money:number,count:(val:number)=>void},friends:string[]};
let handleCount:HandleCount={
    name:'maomao',
    sumValue:sunValue,
    friends:['maomao','apo']
}
/// <reference path = "namespace_learn.js" />
console.log(Tools.calcCircle(20));
console.log(Tools.Circle.calcCircle(10));