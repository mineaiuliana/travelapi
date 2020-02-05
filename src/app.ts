import express, {Request, Response, NextFunction} from 'express';
import {json} from 'body-parser';
import tripRoutes from './routes/trip';


const app = express();
// middleware for body parts
app.use(json());

// registered api
app.use('/trip', tripRoutes);

// middleware for error
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  res.status(500).json({message: err.message});
});

app.listen(3000);