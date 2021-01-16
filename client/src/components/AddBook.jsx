import React from 'react'

const AddBook = () => {
    return (
        <div>
            <h4 className="ui header">Add a book</h4>
            <div className="ui form">
                <div className="fields">
                    <div className="field">                    
                        <input type="text" placeholder="Title"/>
                    </div>
                    <div className="field">                        
                        <select multiple="" className="ui dropdown" name="genre" id="genre" placeholder="Genre">
                            <option value="">Genre</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Non-fiction">Non-fiction</option>
                        </select>
                    </div>
                    <div className="field">                       
                        <input type="number" placeholder="Number of pages"/>
                    </div>
                    <div className="field">                    
                        <input type="number" placeholder="price" />
                    </div>
                    <button className="ui button olive">Add book  <i class="book icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default AddBook
