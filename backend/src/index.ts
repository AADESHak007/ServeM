import  express  from "express" ;
import userRouter from "./routes/userRoutes";
import addressRouter from "./routes/addressRoutes";
import dotenv from "dotenv" ;
import cors from "cors";
import bodyParser from "body-parser";
import complaintRouter from "./routes/complaintRoutes";
import binRouter from "./routes/binRoutes";
dotenv.config({
    path : "./.env"
})

const app = express();
app.use('/*',cors());
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/user",userRouter)
app.use("/api/v1/address",addressRouter);
app.use("/api/v1/complaint",complaintRouter);
app.use("/api/v1/ebin",binRouter);

app.get('/' ,(req, res) => {
    res.send('Hello from the MAPserver');
})



app.listen(3000, () => {
    console.log('Server is running on   ' + 'http://localhost:3000');
});