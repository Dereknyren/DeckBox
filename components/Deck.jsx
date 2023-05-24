import React from 'react';
//add note feature so you can write down future changes you want to make


export default function Deck({deck}){
  return (
    <div className="deck">
        {deck.name}
        <div className="deckButtons">
        <button>Add Note</button>
        <button>Delete</button>
        </div>
    </div>
  )
}