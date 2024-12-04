import express from "express";
import businessRouter from "./routes/business.router.js";
import ordersRouter from "./routes/orders.router.js";
import usersRouter from "./routes/users.router.js";



const app = express();
const PORT = 8080 || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);
app.use("/api/business", businessRouter);
app.use("/api/orders", ordersRouter);
app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT} `);
});



