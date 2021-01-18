import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import {BooksContextProvider} from './context/BooksContext';
import './App.css'

const App = () => {
    return (
        <BooksContextProvider>
             <div className="ui container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        </BooksContextProvider>
            
       
    )
}

export default App
