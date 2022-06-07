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
const AuthorSchema_1 = __importDefault(require("../models/AuthorSchema"));
class AuthorRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const authors = yield AuthorSchema_1.default.find();
            res.json({ status: 200, authors });
        });
    }
    postAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAuthor = new AuthorSchema_1.default(req.body);
            yield newAuthor.save();
            res.json({ status: 200, newAuthor });
        });
    }
    updateAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const author = yield AuthorSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ status: 200, author });
        });
    }
    deleteAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const author = yield AuthorSchema_1.default.findByIdAndDelete(id);
            res.json({ status: 200, message: 'Autor Eliminado' });
        });
    }
    routes() {
        this.router.get('/', this.getAuthor);
        this.router.post('/', this.postAuthor);
        this.router.put('/:id', this.updateAuthor);
        this.router.delete('/:id', this.deleteAuthor);
    }
}
const authorRouter = new AuthorRouter();
exports.default = authorRouter.router;
