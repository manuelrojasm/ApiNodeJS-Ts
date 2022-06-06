import mongoose from "mongoose";


const MONGO_URI = 'mongodb+srv://krmapun:2cLz7m8mXyaEnOJm@cluster0.ioxde.mongodb.net/?retryWrites=true&w=majority'
mongoose.set("useFindAndModify", false)
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})