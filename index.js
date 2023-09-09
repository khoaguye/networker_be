import express from "express"
import peopleRoutes  from "./Route/people.js"
import cors from "cors"
const app = express();

//app.use(express.json());


const allowedOrigins = ['https://networker-fe.vercel.app', 'http://networker-fe.vercel.app', 'http://localhost:3000'];
const corsOptions ={
    origin:allowedOrigins, 
    methods: ["GET","POST","PUT","DELETE"],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())

app.use("/people", peopleRoutes)
app.listen(8000, () => {
    console.log("connected")
})