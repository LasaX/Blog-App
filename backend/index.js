import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config()
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(cors())

app.use('/api/blogs',blogRoutes)

async function Main() {
    await mongoose.connect(process.env.MONGODB_URL);
}

DB().then(()=> console.log('mongo db connected ')).catch(err => console.log(err))
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(prompt,()=>{
    console.log(`port is running on ${PORT}`)
})