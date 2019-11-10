import  {RequestHandler} from 'express';

export  const   apiCheckPostFilter:RequestHandler=(req,res,next)=>{
    console.log(`aipCheckPostFilter:${req.query}`);
    next();
}