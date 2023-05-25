import axios from 'axios';
import React, { useState, useEffect } from 'react';
//add note feature so you can write down future changes you want to make


export default function Deck({ deckName, setDecks, decks }) {
  const [commanderImage, setCommanderImage] = useState()
  useEffect(() => {
    axios.get(`https://api.scryfall.com/cards/search?q=${deckName}`)
      .then(res => {
        if (res.data.data) {
          const matches = res.data.data.filter((item) => item.name === deckName)
          const picture = matches[0].image_uris.small
          setCommanderImage(picture)
        }
      })
  }, [])


  function handleDelete(e) {
    setDecks(decks.filter((item) => item.name !== deckName))
    console.log(decks)
  }

  return (
    <div className="deck">
      <div className="cardImg">
        {/* {deckName} */}
        <img src={commanderImage}></img>
      </div>
      <div className="deckButtonsContainer">
        <button className="deckButtons">Add Note</button>
        <button className="deckButtons" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}