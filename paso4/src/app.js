import express from "express";
import businessRouter from "./routes/business.router.js";
import ordersRouter from "./routes/orders.router.js";
import usersRouter from "./routes/users.router.js";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config()
const PORT = 8080 || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
//deshabilitar el cache del navegador!!!
app.use("/api/users", usersRouter);
app.use("/api/business", businessRouter);
app.use("/api/orders", ordersRouter);
app.listen(process.env.PORT||3000, () => {
  console.log(`Server listening at PORT ${process.env.PORT} `);
});


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('conectado a mongo')
}).catch((error)=>{
    console.log('error de conexion a db',error)
})

