require("express-async-errors")
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const express = require('express')
const booksLogic = new (require("../bl/books"))()

const router = express.Router()

router.get("/",(async (req, res) => {
    const books = await booksLogic.getBooks()
    res.status(200).json({books})
}))
router.post("/", upload.single("image"), (async (req, res) => {
    const book = await booksLogic.addBook(req.body, req.file)
    res.status(200).json({book})
}))
router.get("/:id",(async (req, res) => {
    const book = await booksLogic.getBook(req.params.id)
    res.status(200).json({book})
}))
router.put("/:id",(async (req, res) => {
    await booksLogic.updateBook(req.params.id, req.body)
    res.status(202).json({message: "success"})
}))
router.delete("/:id",(async (req, res) => {
    await booksLogic.deleteBook(req.params.id)
    res.status(202).json({message: "success"})
}))
router.post('/upload',upload.single("image"),async (req, res) => {
    const upload = await booksLogic.addBook(req.body, req.file)
    res.status(200).json({upload})
})

module.exports = router

