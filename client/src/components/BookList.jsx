import React, {useContext, useEffect} from 'react'
import booksapi from '../apis/booksapi'
import {BooksContext} from '../context/BooksContext'
  
const BookList = (props) => {

    const {books, setBooks} = useContext(BooksContext);



    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await booksapi.get("/");
                setBooks(response.data.data.books);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])    

    const handleDelete = async (id) => {
        try {
            const response = await booksapi.delete(`/${id}`)
            setBooks(books.filter(book => {
                return book.id !== id
            }));
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <table className="ui selectable celled table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Recommended By</th>
                        <th>Number of pages</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map(book=> {
                        return (
                            <tr key={book.id}>
                                <td>
                                    {book.title}    
                                </td>
                                <td>{book.genre}</td>
                                <td>recommended by</td>
                                <td>{book.number_of_pages}</td>
                                <td>{book.price}</td>
                                <td><i className="icon edit"></i></td>
                                <td><i onClick={() => handleDelete(book.id)} className="icon trash alternate"></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BookList
