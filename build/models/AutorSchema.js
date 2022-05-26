"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AutorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    CreateAt: { type: Date, default: Date.now() }
});
exports.default = (0, mongoose_1.model)("Autor", AutorSchema);
