let dataObj:{name:string,age:number}={
    name:'maomao',
    age:26
}
//复杂类型
let complex:{data:number[],myFunc:(item:number)=>number[]}={
    data:[1,2.34,54,21],
    myFunc:function(item:number):number[]{
        console.log('number:',item);
        return [item];
    }
}

//type
type myType={data:number[],myFunc:(item:number)=>number[]};
let complex2:myType={
    data:[22,22,32],
    myFunc:(item):number[]=>{
        return []//this.data;
    }
}