import { model , Schema } from "mongoose";

const bookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }, 
    author:{
        type:String,
        required:true
    }, 
    publishedDate:{
        type:String,
        default: Date.now 
    }
})



const bookModel =model("book",bookSchema)

export default bookModel;