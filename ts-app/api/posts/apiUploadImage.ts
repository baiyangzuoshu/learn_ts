import { RequestHandler } from 'express';
import { DataStore } from '../../data/data';
import { getFileUploader } from '../general/static';

export const apiUploadImage: RequestHandler = (req, res) => {
  const postIndex = DataStore.posts.findIndex(
    (item: any) => item.id == req.params.id
  );

  if (postIndex > -1) {
      const upload=getFileUploader('development');
      upload(req,res,err=>{
          if(err){
              console.log(`error:${err}`);
              res.status(404).json({status:'error',message:'upload failed!'})
          }else{
              console.log(`filename:${req.file.filename}`);
              DataStore.posts[postIndex].img.push(req.file.filename);
              res.status(200).json({status:"success",data:DataStore.posts[postIndex]});
          }
      })
  } else {
    res.status(404).json({ status: 'failed', message: 'upload failed' });
  }
};
