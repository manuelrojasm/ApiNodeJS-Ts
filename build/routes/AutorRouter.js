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
const AutorSchema_1 = __importDefault(require("../models/AutorSchema"));
class AutorRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getAutor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const autors = yield AutorSchema_1.default.find();
            res.json({ status: 200, autors });
        });
    }
    // async getAutorId(req:Request, res: Response): Promise<void> {
    // }
    postAutor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAutor = new AutorSchema_1.default(req.body);
            yield newAutor.save();
            res.json({ status: 200, newAutor });
        });
    }
    updateAutor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const autor = yield AutorSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ status: 200, autor });
        });
    }
    deleteAutor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const autor = yield AutorSchema_1.default.findByIdAndDelete(id);
            res.json({ status: 200, message: 'Autor Eleminado' });
        });
    }
    routes() {
        this.router.get('/', this.getAutor);
        this.router.post('/', this.postAutor);
        this.router.put('/:id', this.updateAutor);
        this.router.delete('/:id', this.deleteAutor);
    }
}
const autorRouter = new AutorRouter();
exports.default = autorRouter.router;
