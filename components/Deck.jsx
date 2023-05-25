import axios from 'axios';
import React, { useState, useEffect } from 'react';
//add note feature so you can write down future changes you want to make


export default function Deck({ deckName }) {
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
  //image_uris


  // function handleDelete(){
  // }

  return (
    <div className="deck">
      {deckName}
      <div className="deckButtonsContainer">
        <img src={commanderImage}></img>
        <button className="deckButtons">Add Note</button>
        <button className="deckButtons">Delete</button>
      </div>
    </div>
  )
}