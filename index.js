import express from "express"
import peopleRoutes  from "./Route/people.js"
import cors from "cors"
const app = express();

app.use(express.json());
app.use("/people", peopleRoutes)


// const whitelist = ['http://localhost:3000']

// const corsOptions = {
//     origin: (origin, callback) => {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error())
//       }
//     }
//   }
//   app.use(cors(corsOptions))
//   app.use(cors({
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

app.listen(8000, () => {
    console.log("connected")
})