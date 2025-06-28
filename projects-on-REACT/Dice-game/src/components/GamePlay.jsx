import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import RollDice from "./RollDice"
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


function GamePlay(){
    const [score,setScore]=useState(0);
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice, setCurrentDice]=useState(1);
    const [error,setError]=useState("");
    const [showRules,setShowRules]=useState(false)

    //generate random number
    const generateRandomNumber = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const rollDice = ()=>{
        if (!selectedNumber) {
            setError("You have not selected any number");
            return
        };
        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice((prev)=> randomNumber);

        if (selectedNumber == randomNumber){
            setScore((prev)=>prev + randomNumber)
        }else{
            setScore((prev)=>prev - 2)        
        }
        setSelectedNumber(undefined)

    }

    const resetScore=()=>{
        setScore(0);
    }
    return (
    <MainContainer>
        <div className="top_section">
            <TotalScore
            score={score}
            />
            <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            />
        </div>
        <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
        />
        <div className="btns">
            <OutlineButton
            onClick={resetScore}
            >Reset Score</OutlineButton>
            <Button
            onClick={()=>setShowRules((prev)=>!prev)}
            >
                {showRules ? "Hide" :"Show"}
                 Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>)
}
export default GamePlay








const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }
`