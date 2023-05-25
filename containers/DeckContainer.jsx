import React, { useState, useRef, useEffect } from "react";
// import DeckCreator from './components/DeckCreator.jsx';
import Deck from '../components/Deck.jsx';




export default function DeckContainer({ decks, deckRef, setDecks }) {
 
// useEffect(() => {
//   const storedDecks = localStorage.getItem(LOCAL_STORAGE_KEY)
//   if (storedDecks) setDecks(storedDecks)
// })

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decks))
// }, [decks])

// function handleAddDeck(e) {
// const [decks, setDecks] = useState([])
// const deckRef = useRef() 

//   const name = deckRef.current.value
//   if (name === '') return
//   setDecks(prevDecks => {
//     return [...prevDecks, {id: 1, name: name}]
//   })
//   console.log(name)
//   deckRef.current.value = null
// }

  return (
    decks.map(deck => {
      return <Deck key={deck.name} deckName={deck.name} setDecks={setDecks} decks={decks}/>
    })
  )
}