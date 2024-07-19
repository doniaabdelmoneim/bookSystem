
import bookModel from './../../../database/models/book.model.js';
export const getBook=async (req,res)=>{
    const books=await bookModel.find()
    res.status(200).json({msg:"done",books})
};

export const createBook=async (req,res)=>{
    try{
        const {title,content,author,publishedDate}=req.body
        const book=await bookModel.create({title,content,author,publishedDate})
        res.status(200).json({msg:"success",book})
    }catch(error){
        res.status(400).json({msg:"fail",error})
    }
   
};

export const updateBook=async (req,res)=>{
    const {id}=req.params
    const{title,content,author,publishedDate}=req.body
    const book=await bookModel.findByIdAndUpdate(id,{title,content,author,publishedDate})
    if(!book){
        return res.status(404).json({msg:"fail",error:"book not found"})
    }
    res.status(200).json({msg:"success",book})
};  

export const deleteBook=async (req,res)=>{
    const {id}=req.params
    const book=await bookModel.findByIdAndDelete(id)
    if(!book){
        return res.status(404).json({msg:"fail",error:"book not found"})
    }
    res.status(200).json({msg:"success",book})
};

export const getBookById=async (req,res)=>{
    const book=await bookModel.findById(req.params.id)
    res.status(200).json({msg:"success",book})
};


