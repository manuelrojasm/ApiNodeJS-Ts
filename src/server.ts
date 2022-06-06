import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import BooksRouter from "./routes/BooksRouter";
import AuthorRouter from "./routes/AuthorRouter";

class Server{
    public app: express.Application;
    constructor(){
        this.app = express();
        this.config();
        this.Routes();         
    }

    config():void{
        this.app.set('port' , process.env.PORT || 4000 );
        this.app.use(morgan("dev"))
        this.app.use(express.json())
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(cors())
    }

    public Routes (): void {
        //const router: express.Router = express.Router();
        this.app.use('/api/books', BooksRouter)
        this.app.use('/api/author', AuthorRouter)

    }

    public start(): void {

        this.app.listen( this.app.get('port') , () => {
            console.log("listen port" , this.app.get('port'))
        });
    }
}
export { Server }