import { Request, Response, Router} from 'express'
import Book from '../models/BookSchema'
class BooksRouter {

    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    async getBook(req:Request, res: Response): Promise<void> {
        const books = await Book.find();
        res.json({status:200, books})
    }

    // async getAutorId(req:Request, res: Response): Promise<void> {
        
    // }

    async postBook(req:Request, res: Response): Promise<void> {
        const newBook = new Book(req.body)
        await newBook.save();
        res.json({status:200, newBook})           
    }

    async updateBook(req:Request, res: Response): Promise<void> {
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body, {new:true})
        res.json({status:200, book})         
    }

    async deleteBook(req:Request, res: Response): Promise<void> {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id)
        res.json({status:200, message:'book Eleminado'})         
    }

    routes(){
        this.router.get('/', this.getBook)
        this.router.post('/', this.postBook)
        this.router.put('/:id', this.updateBook)
        this.router.delete('/:id', this.deleteBook)
    }
}

const bookRouter = new BooksRouter();
export default bookRouter.router;