import { Request, response, Response, Router} from 'express'
import Autor from '../models/AutorSchema'
class AutorRouter {
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    async getAutor(req:Request, res: Response): Promise<void> {
        const autors = await Autor.find();
        res.json({status:200, autors})
    }

    // async getAutorId(req:Request, res: Response): Promise<void> {
        
    // }

    async postAutor(req:Request, res: Response): Promise<void> {
        const newAutor = new Autor(req.body)
        await newAutor.save();
        res.json({status:200, newAutor})       
    }

    async updateAutor(req:Request, res: Response): Promise<void> {
        const {id} = req.params;
        const autor = await Autor.findByIdAndUpdate(id, req.body, {new:true})
        res.json({status:200, autor}) 
    }

    async deleteAutor(req:Request, res: Response): Promise<void> {
        const {id} = req.params;
        const autor = await Autor.findByIdAndDelete(id)
        res.json({status:200, message:'Autor Eleminado'})        
    }

    routes(){
        this.router.get('/', this.getAutor)
        this.router.post('/', this.postAutor)
        this.router.put('/:id', this.updateAutor)
        this.router.delete('/:id', this.deleteAutor)
    }
}

const autorRouter = new AutorRouter();
export default autorRouter.router;