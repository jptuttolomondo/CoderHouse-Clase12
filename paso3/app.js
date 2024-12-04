import express from "express";
import businessRouter from "./routes/business.router.js";
import ordersRouter from "./routes/orders.router.js";
import usersRouter from "./routes/users.router.js";
import mongoose from 'mongoose'

import cors from 'cors'
//npm i mon
const app = express();
const PORT = 8080 || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors({origin :'http://127.0.0.1:5500',methods:['POST','PUT','GET']}))
//deshabilitar el cache del navegador!!!
app.use("/api/users", usersRouter);
app.use("/api/business", businessRouter);
app.use("/api/orders", ordersRouter);
app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT} `);
});


mongoose.connect('mongodb+srv://adminappresto:Goring2311*@clusterappresto.ud9f7tf.mongodb.net/clase12?retryWrites=true&w=majority').then(()=>{
    console.log('conectado a mongo')
}).catch((error)=>{
    console.log('error de conexion a db',error)
})

