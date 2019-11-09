import  express from 'express';
import  {apiGetPosts} from './api/posts/apiGetPosts';
import  {apiGetDetail} from './api/posts/apiGetDetail';
import  {apiCreatePost} from './api/posts/apiCreatePost';
import bodyParser from 'body-parser';
import { apiDeleteDetail } from './api/posts/apiDeleteDetail';
import  path from 'path';
import { apiUploadImage } from './api/posts/apiUploadImage';
import { CustomRequestHander } from './interface/express';
import { apiErrorHandler } from './api/general/errorHandler';

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/static',express.static(path.resolve('./','public','img')));
app.use(apiErrorHandler);

const   authenticator:CustomRequestHander=(req,res,next)=>{
    const   username='maomao';
    req.user=username;
    next();
}

const   logger:CustomRequestHander=(req,res,next)=>{
    console.log(`${req.user},${new Date()}-${req.method}-Request to`+req.path);
    next();
}
app.use(logger);
app.use(authenticator);


app.get('/',(req,res,next)=>{
    res.send(`hello learn ts...`);
})

app.get('/posts',apiGetPosts);
app.delete('/posts/:id',apiDeleteDetail);

app.post('/posts/:id',apiGetDetail);
app.post('/posts',apiCreatePost);

app.post('/posts/:id/img',apiUploadImage);

app.listen(process.env.PORT||'8091',()=>{
    console.log(`listen  port 8091`);
})