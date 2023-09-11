import express from "express"
import peopleRoutes  from "./Route/people.js"
import cors from "cors"
// import { CronJob } from "cron";
// import axios from 'axios';


const app = express();

//app.use(express.json());



//allow origin
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
app.get('/', function(req, res){
    res.send('server is running');
  });
// new CronJob('* * * * * *', function() {
//     axios.get('https://networker-be.onrender.com') 
//       .then(response => {
//         console.log('Server pinged successfully');
//       })
//       .catch(error => {
//         console.log('Error pinging server: ', error);
//       });
//   }, null, true, 'America/Chicago');



app.listen(8000, () => {
    console.log("connected")
})


// use Cron, self pinging the server in every 10min
//var CronJob = require('cron').CronJob;
// var ping = require('ping');
// var host = 'https://networker-be.onrender.com';

// var job = new CronJob('* * * * * *', function() {
//     ping.sys.probe(host, function(isAlive){
//         var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
//         console.log(msg);
//     });
// }, null, true, 'America/Los_Angeles');