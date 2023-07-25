import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from "./components/List.jsx";

// function ListItem(props) {
//     return <li>{props.animal}</li>
// }

// function List(props) {
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return <ListItem key={animal} animal={animal} />;
//             })}
//         </ul>
//     )
// }

function Button({ text = "Bacon", color = "blue", fontSize = 13, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }
    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    )

}
// Button.defaultProps = {
//     text: "Click me!",
//     color: "blue",
//     fontSize: 12
// };

function App() {
    // const animals = ["Lion", "Cow", "Snake", "Lizard", "baconator", "potatonator"];
    // const animalsList = animals.map((animal) => {
    //     return <li key={animal}>{animal}</li>
    // })
    const handleButtonClick = () => {
        window.location.href = "https://www.google.com"
    }

  return (
    <>
        <div>
           <Button text="Click me!" color="blue" fontSize={12} />
            <Button handleClick={handleButtonClick} />
            <Button text="Don't click!" color="red" fontSize={23} />
        </div>
    </>
  )
}

export default App
