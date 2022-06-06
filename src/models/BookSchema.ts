import {Schema, model} from "mongoose"

const BookSchema = new Schema ({
    name: {type:String, required:true},
    editorial: {type:String, required:true},
    category: {type:String, required:true},
    CreateAt: {type:Date, default:Date.now()}
})

export default model("Book", BookSchema)