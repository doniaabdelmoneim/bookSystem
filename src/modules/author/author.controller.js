
import authorModel from './../../../database/models/author.model.js';

export const getAuthor=async (req,res)=>{
    const author=await authorModel.find()
    res.status(200).json({msg:" All Authors Here",author})
};
export const createAuthor=async (req,res)=>{
    try{
        const {name,bio,birthDate,books}=req.body
        const authorExist=await authorModel.findOne({name})
        if(authorExist){
            return res.status(400).json({msg:"fail",error:"name already exist"})
        }
        const author=await authorModel.create({name,bio,birthDate,books})
        res.status(200).json({msg:"added successfully",author})
    }catch(error){
        res.status(400).json({msg:"fail",error})
    }
   
};

export const updateAuthor=async (req,res)=>{
    const {id}=req.params
    const {name,bio,birthDate,books}=req.body
    const author=await authorModel.findByIdAndUpdate(id, {name,bio,birthDate,books})
    if(!author){
        return res.status(404).json({msg:"fail",error:"author not found"})
    }
    res.status(200).json({msg:"updated",author})
};  

export const deleteAuthor=async (req,res)=>{
    const {id}=req.params
    const author=await authorModel.findByIdAndDelete(id)
    if(!author){
        return res.status(404).json({msg:"fail",error:"author not found"})
    }
    res.status(200).json({msg:"deleted",author})
};

export const getAuthorById=async (req,res)=>{
    const author=await authorModel.findById(req.params.id)
    res.status(200).json({msg:"success",author})
};


