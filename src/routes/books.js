require("express-async-errors")
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const express = require('express')
const booksLogic = new (require("../bl/books"))()
const {permission_mw, auth_mw, equalId_mw} = require("../auth")

const router = express.Router()

router.get("/",(async (req, res) => {
    const books = await booksLogic.getBooks()
    res.status(200).json({books})
}))
router.post("/", [auth_mw, permission_mw("ADMIN")], upload.single("image"), (async (req, res) => {
    const book = await booksLogic.addBook(req.body, req.file)
    res.status(200).json({book})
}))
router.get("/:id", (async (req, res) => {
    const book = await booksLogic.getBook(req.params.id)
    res.status(200).json({book})
}))
router.put("/:id", [auth_mw, permission_mw("ADMIN")], (async (req, res) => {
    await booksLogic.updateBook(req.params.id, req.body)
    res.status(202).json({message: "success"})
}))
router.delete("/:id", [auth_mw, permission_mw("ADMIN")], (async (req, res) => {
    await booksLogic.deleteBook(req.params.id)
    res.status(202).json({message: "success"})
}))

module.exports = router

