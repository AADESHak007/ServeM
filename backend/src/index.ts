import  express  from "express" ;
import userRouter from "./routes/userRoutes";
import addressRouter from "./routes/addressRoutes";
import dotenv from "dotenv" ;
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config({
    path : "./.env"
})

const app = express();
app.use('/*',cors());
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/user",userRouter)
app.use("/api/v1/address",addressRouter);

app.get('/' ,(req, res) => {
    res.send('Hello from the MAPserver');
})



app.listen(3000, () => {
    console.log('Server is running on   ' + 'http://localhost:3000');
});