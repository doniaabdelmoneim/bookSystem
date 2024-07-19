import { Router } from "express";
import * as BC from './book.controller.js';


const router=Router()
router.get("/",BC.getBook)
router.post("/",BC.createBook)
router.patch("/:id",BC.updateBook)
router.delete("/:id",BC.deleteBook)
router.get("/:id",BC.getBookById)







export default router