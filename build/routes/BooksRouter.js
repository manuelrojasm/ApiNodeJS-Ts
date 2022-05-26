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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BooksRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('Metodo Get ok Obtener');
        });
    }
    // async getAutorId(req:Request, res: Response): Promise<void> {
    // }
    postBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('Metodo Post ok Crear');
        });
    }
    updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('Metodo put ok Actualizar');
        });
    }
    deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('Metodo Delete ok Eleminar');
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
