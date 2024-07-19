import authorModel from "../../../database/models/author.model.js";
import bookModel from "../../../database/models/book.model.js";

// Implement search functionality to filter books by title or author
export const filterBook=async (req,res)=>{
    const {title,author}=req.query
    const books=await bookModel.find({$or:[{title},{author}]})
    if(!books){
        return res.status(404).json({msg:"fail",error:"book not found"})
    }
    res.status(200).json({msg:"success",books})
}

// Implement pagination for the GET endpoints for retrieving all books and authors.

export const retrievingAuthor=async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;

    try {
        const authors = await authorModel.find()
            .skip((page - 1) * limit)
            .limit(limit);
            
        res.json(authors);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
    }


// relationship so that when retrieving an author, the response includes a list of books written by them.
export const getAuthorByBook=async (req, res) => {
    try {
        const author = await authorModel.findById(req.params.id)
            .populate('books');

        res.json(author);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve author' });
    }
  };

  // Add pagination to the GET endpoints for retrieving all books and authors.

export const retrievingBook=async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;

    try {
        const books = await bookModel.find().skip((page - 1) * limit).limit(limit);
        res.json({msg:"done",books});
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve books' });
    }
}
