import React, { useState, useRef, useEffect } from "react";
//Do we need react-router-dom
import MainContainer from '../containers/MainContainer'
import '../style.css'
import DeckContainer from '../containers/DeckContainer'
import axios from 'axios'

//add a div to wrap first p and add in TotalDecks

const LOCAL_STORAGE_KEY = 'deckApp.decks'

const App = () => {
  const [decks, setDecks] = useState([])

  const deckRef = useRef()

  useEffect(() => {
    const storedDecks = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedDecks) setDecks(JSON.parse(storedDecks))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decks))
  }, [decks])

  function handleAddDeck(e) {
    const name = deckRef.current.value
    if (name === '') return
    setDecks([...decks, { name: name }])
    deckRef.current.value = null
  }

  return (
    <>
      <h1>Welcome to the Command Zone</h1>
      <div className="addDeck">
        <input placeholder="Add New Deck" className="textBox" ref={deckRef} type="text" />
        <button className="addButton" onClick={handleAddDeck}>Add</button>
      </div>
      <div>
        <DeckContainer decks={decks} deckRef={deckRef} setDecks={setDecks}/>
      </div>
    </>
  )
}

export default App