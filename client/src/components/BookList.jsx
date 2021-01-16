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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="title">Braiding Sweetgrass</td>
                        <td data-label="genre">Botany</td>
                        <td data-label="Recommended By">Google Search</td>
                        <td data-label="Number of pages">300</td>
                        <td data-label="Price">$20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BookList
