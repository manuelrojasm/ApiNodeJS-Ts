import mongoose from "mongoose";

const MONGO_URI = 'mongodb+srv://maura17:maura17@electivaiii.btj2c.mongodb.net/?retryWrites=true&w=majority'

mongoose.set("useFindAndModify", false)
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})