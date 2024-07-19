import { Router } from "express";
import * as AC from "./author.controller.js";


const router=Router()

router.get("/",AC.getAuthor)
router.post("/",AC.createAuthor)
router.patch("/:id",AC.updateAuthor)
router.delete("/:id",AC.deleteAuthor)
router.get("/:id",AC.getAuthorById)


export default router