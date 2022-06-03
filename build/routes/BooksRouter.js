"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookSchema_1 = __importDefault(require("../models/BookSchema"));
class BooksRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield BookSchema_1.default.find();
            res.json({ status: 200, books });
        });
    }
    // async getAutorId(req:Request, res: Response): Promise<void> {
    // }
    postBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = new BookSchema_1.default(req.body);
            yield newBook.save();
            res.json({ status: 200, newBook });
        });
    }
    updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const book = yield BookSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ status: 200, book });
        });
    }
    deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const book = yield BookSchema_1.default.findByIdAndDelete(id);
            res.json({ status: 200, message: 'book Eleminado' });
        });
    }
    routes() {
        this.router.get('/', this.getBook);
        this.router.post('/', this.postBook);
        this.router.put('/:id', this.updateBook);
        this.router.delete('/:id', this.deleteBook);
    }
}
const bookRouter = new BooksRouter();
exports.default = bookRouter.router;
