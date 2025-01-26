import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth.route.js'
import blogRoutes from './routes/blog.route.js'
import commentRoutes from './routes/comment.route.js'


const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({limit : '10mb'}));
app.use(bodyParser.urlencoded({limit:'10mb', extended : true}))
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
}))

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);


async function Main() {
    await mongoose.connect(process.env.MONGODB_URL);
    app.get('/',(req,res)=>{
        res.send("Server is running ...")
    })
}

Main().then(()=> console.log('mongo db connected ')).catch(err => console.log('mongo db error'))
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`)
})