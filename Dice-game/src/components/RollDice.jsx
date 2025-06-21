import { useState } from "react"
import styled from "styled-components"


const RollDice = ({currentDice,rollDice}) => {

  return (
    <DiceContainer>
    <div className="dice"
    onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    .dice{
        display: flex;
        justify-content: center;
        margin-top: 48px;
        cursor: pointer;
    }
    p{
        text-align: center;
        font-size: 24px;
        font-weight: 500px;
    }
`
