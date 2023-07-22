import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from "./components/List.jsx";

function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard", "baconator", "potatonator"];
    const animalsList = animals.map((animal) => {
        return <li key={animal}>{animal}</li>
    })

  return (
    <>
        <div>
            <h1>Animals: </h1>
            <ul>
                <List animals={animals} />
            </ul>
        </div>
    </>
  )
}

export default App
