import React from "react";
import ReactDOM from 'react-dom';
import Card from './Card';
import contacts from '../contacts';

const year = new Date().getFullYear();


function createCard(contacts){
    return(
        <Card 
        key = {contacts.id}
        name = {contacts.name}
        img = {contacts.picURL}
        phone = {contacts.phone}
        email = {contacts.email}
        />
    );
}


function App(){
    return (
        <div>
            <h1>My Reference Cards</h1>
            {contacts.map(createCard)}
            <footer>© {year} Tyler Nguyen</footer>
        </div>
    );
}

export default App;