import {DataStore} from "../../data/data";
import {RequestHandler} from 'express';
import {PostDetail} from '../../model/shared/postDetail'

export  const apiGetDetail:RequestHandler=(req,res)=>{
    console.log(`apiGetDetail:${req.params.id}`);
    
    const   selectedPost=DataStore.posts.find(
        (item:any)=>item.id==req.params.id
        );

    if(selectedPost){
        const   selectdTodos=DataStore.todos.filter((item:any)=>item.postId==req.params.id);
        const   imgURLs=selectedPost.img;

        res.json(new PostDetail(selectedPost,selectdTodos,imgURLs));
    }else{
        res.status(404).json({status:'failed',message:'post not found!'})
    }
}