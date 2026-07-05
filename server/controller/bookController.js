const Book = require('../models/Book');
//create
exports.createBook =async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
};
//read all
exports.getAllBooks = async (req, res) => {
    const books = await Book.find();
    res.send(books);
};
//read one
exports.getBook = async (req, res) => {
    const book = await Book.findById(req.params.id); 
    res.send(book);
};
//update
exports.updateBook = async(req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body,
        { new: true });
    res.send(book);
};
//delete 
exports.deleteBook = async(req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send({message: 'Book Deleted'});
};



