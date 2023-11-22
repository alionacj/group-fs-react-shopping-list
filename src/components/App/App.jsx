import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import List from '../List/List.jsx';
import './App.css';


function App() {

    // react state
    let [listItems, setlistItems] = useState([]);

    // client state

    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        axios({
            method: 'GET',
            url: '/shoppinglist'
        })
        .then((response) => {
            setlistItems(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }
    
    return (
        <div className="App">
            <Header />
            <List listItems = {listItems} />
        </div>
    );
}

export default App;
