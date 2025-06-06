import express from "express"; //framework de node
import cors from "cors";
import morgan from "morgan"; //esto controla el registro de las solicitudes HTTP
import router from "./routes/router.js";
import limiter from "./middleware/limiter.js";
import requestIp from 'request-ip'



const app = express(); //instanciar la aplicacion express

app.use(limiter);
app.use(cors()); //? permitir las solicitudes desde cualquier origen
app.use(morgan("dev")); //? ver peticiones HTTP por consola
app.use(express.json()); //? analizar el cuerpo de las solicitados como json
app.use(requestIp.mw());


//app.use(limiter)
app.use('/api', router); //? montar las rutas definidas


export default function handler(req: any, res: any) {
    app(req, res); // esta línea convierte Express en serverless handler
  }