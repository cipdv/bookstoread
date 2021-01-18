require ('dotenv').config();
const express = require ('express');
const db = require ('./db');
const cors = require ('cors');

const app = express ();

app.use(cors());

app.use(express.json());

//retrieve book list
app.get("/api/1/bookstoread", async (req, res)=>{
    try{
        const results = await db.query("select * from books");
        res.status(200).json({
            status: "book list loaded",
            results: results.rows.length,
            data: {
                books: results.rows
            }
        })
    } catch (err) {
        console.log(err);
    }
})

//retrieve book by id search
app.get("/api/1/bookstoread/:id", async (req, res)=>{
    try {
        const results = await db.query("select * from books where id = $1", [req.params.id]);
        res.status(200).json({
            status: "here's the book you asked for",
            data: {
                book: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err);
    }
})

//add a book to the list
app.post("/api/1/bookstoread", async (req, res)=>{
    try {
        const results = await db.query("insert into books (title, genre, recommender, number_of_pages, price) values ($1, $2, $3, $4, $5) returning *", [req.body.title, req.body.genre, req.body.recommender, req.body.number_of_pages, req.body.price])
        res.status(201).json({
            status: "book successfully added",
            data: {
                books: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err);
    }
})

//delete book from list
app.delete("/api/1/bookstoread/:id", async (req, res)=>{
    try {
        const results = await db.query("delete from books where id = $1", [req.params.id])
        res.status(204).json({
            status: "book was removed from the list"
        })
    } catch (err) {
        console.log(err);
    }
})

//leave a review for the book
// app.put("/api/1/bookstoread/:id", async (req, res)=>{
//     try {
//         const results = await db.query("update books set review")
//     } catch (err) {
//         console.log(err)
//     }
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`);
})