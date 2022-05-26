"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const BooksRouter_1 = __importDefault(require("./routes/BooksRouter"));
const AutorRouter_1 = __importDefault(require("./routes/AutorRouter"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.Routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
    }
    Routes() {
        //const router: express.Router = express.Router();
        this.app.use('/api/books', BooksRouter_1.default);
        this.app.use('/api/autor', AutorRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("listen port", this.app.get('port'));
        });
    }
}
exports.Server = Server;
