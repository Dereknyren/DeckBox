import React from 'react';
//add note feature so you can write down future changes you want to make


export default function Deck({deck}){

  function handleDelete(){
  }

  return (
    <div className="deck">
        {deck.name}
        <div className="deckButtonsContainer">
        <button className="deckButtons">Add Note</button>
        <button className="deckButtons" onClick="handleDelete">Delete</button>
        </div>
    </div>
  )
}