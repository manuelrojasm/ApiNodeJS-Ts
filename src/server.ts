import express from "express";

class Server{
    public app: express.Application;
    constructor(){
        this.app = express();
        this.app.set('port' , 4000 )
        this.Routes();
    }

    public Routes (): void {
        this.app.get('/', (req, resp)=>{
            resp.send("Hola Mundo")
        })

    }

    public start(): void {

        this.app.listen(this.app.get('port')),()=>{
            console.log("listen port" , this.app.get('port'))
        }
    }
}
export { Server }