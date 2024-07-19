import { model , Schema } from "mongoose";

const authorSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    bio:String, 
    birthDate:Date,
    books:{
        type:Schema.Types.ObjectId,
        ref:"book"
    }
},{
    timestamps:true
})



const authorModel =model("author",authorSchema)

export default authorModel;