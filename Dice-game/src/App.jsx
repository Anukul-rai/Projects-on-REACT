import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"
import { useState } from "react"


function App(){

    const[isGAmeStarted,setIsGameStarted] = useState(false)

    const toggleGameplay= () =>{
        setIsGameStarted((prev) => !prev)
    }

    return(
        <>
        {isGAmeStarted ? <GamePlay/> : <StartGame
        toggle={toggleGameplay}
        /> }
        </>
    )

}
export default App

