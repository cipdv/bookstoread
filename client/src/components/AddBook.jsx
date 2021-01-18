import React, {useState} from 'react'

const AddBook = () => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [numOfPages, setNumOfPages] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div>
            <h4 className="ui header">Add a book</h4>
            <div className="ui form">
                <div className="fields">
                    <div className="field">                    
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title"/>
                    </div>
                    <div className="field">                        
                        <select value={genre} onChange={e => setGenre(e.target.value)} multiple="" className="ui dropdown" name="genre" id="genre" placeholder="Genre">
                            <option value="">Genre</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Non-fiction">Non-fiction</option>
                        </select>
                    </div>
                    <div className="field">                       
                        <input value={numOfPages} onChange={e => setNumOfPages(e.target.value)} type="number" placeholder="Number of pages"/>
                    </div>
                    <div className="field">                    
                        <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="price" />
                    </div>
                    <button className="ui button olive">Add book  <i class="book icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default AddBook
