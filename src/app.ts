import express, { json } from "express";
import 'dotenv/config'
import morgan from "morgan";
import router from "./routes/products";

const app = express();

/* Middlewares */

app.use(json());
app.use(morgan('dev'));

/* Routes */
app.use('/products', router);

app.listen(process.env.PORT, () => {
    console.log('connected to:', process.env.PORT)
})