import React from 'react'
import AddBook from '../components/AddBook'
import BookList from '../components/BookList'
import Header from '../components/Header'

const Home = () => {
    return (
        <div className="ui container">
            <Header />
            <AddBook />
            <BookList />
            
        </div>
    )
}

export default Home
