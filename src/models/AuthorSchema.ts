import {Schema, model} from "mongoose"

const AuthorSchema = new Schema ({
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    CreateAt: {type:Date, default:Date.now()}
})

export default model("Autor", AuthorSchema)