import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import orderRouter from './routes/orderRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/order', orderRouter);

const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`server is connected to ${port}`);

})