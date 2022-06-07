"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    editorial: { type: String, required: true },
    category: { type: String, required: true },
    CreateAt: { type: Date, default: Date.now() }
});
exports.default = (0, mongoose_1.model)("Book", BookSchema);
