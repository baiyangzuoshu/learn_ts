import {DataStore} from "../../data/data";
import {RequestHandler} from 'express';

export  const apiDeleteDetail:RequestHandler=(req,res)=>{
    const   postIndex=DataStore.posts.findIndex((item:any)=>item.id==req.params.id);
    console.log(postIndex);
    if(postIndex>-1){
        DataStore.posts.splice(postIndex,1);
        res.status(200).json(`delete successed:${req.params.id}`);
    }else{
        res.send(`not found:${req.params.id}`);
    }
}