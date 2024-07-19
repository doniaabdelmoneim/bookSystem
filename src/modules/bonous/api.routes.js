import { Router } from "express";
import { filterBook, getAuthorByBook, retrievingAuthor, retrievingBook } from './api.controller.js';

const router=Router()

router.get('/author/:id',getAuthorByBook)
router.get("/book",filterBook)
router.get("/retrieving/author",retrievingAuthor)
router.get("/retrieving/book",retrievingBook)




export default router