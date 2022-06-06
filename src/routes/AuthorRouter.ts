import { Request, response, Response, Router} from 'express'
import Author from '../models/AuthorSchema'
class AuthorRouter {
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    async getAuthor(req:Request, res: Response): Promise<void> {
        const authors = await Author.find();
        res.json({status:200, authors})
    }
    
    async postAuthor(req:Request, res: Response): Promise<void> {
        const newAuthor = new Author(req.body)
        await newAuthor.save();
        res.json({status:200, newAuthor})       
    }

    async updateAuthor(req:Request, res: Response): Promise<void> {
        console.log(req.params);
        const {id} = req.params;
        const author = await Author.findByIdAndUpdate(id, req.body, {new:true})
        res.json({status:200, author}) 
    }

    async deleteAuthor(req:Request, res: Response): Promise<void> {
        const {id} = req.params;
        const author = await Author.findByIdAndDelete(id)
        res.json({status:200, message:'Autor Eliminado'})        
    }

    routes(){
        this.router.get('/', this.getAuthor)
        this.router.post('/', this.postAuthor)
        this.router.put('/:id', this.updateAuthor)
        this.router.delete('/:id', this.deleteAuthor)
    }
}

const authorRouter = new AuthorRouter();
export default authorRouter.router;