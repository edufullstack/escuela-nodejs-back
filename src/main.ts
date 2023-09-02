import express, { Request, Response } from 'express';
import 'reflect-metadata';
import connection from './db/connection';
import cors from 'cors';


const app = express();

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.json("Node Project20 Back-End Running");
});

const start = async (): Promise<void> => {
    try {
        await connection.sync();
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        })
    }
    catch(error) {
        console.error(error);
    }
}

start();
