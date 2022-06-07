import mongoose from "mongoose";
import {AppConstants} from "./constants"

const MONGO_URI = AppConstants.MONGO_DB;
mongoose.set("useFindAndModify", false)
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})