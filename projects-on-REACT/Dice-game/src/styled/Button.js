import styled from "styled-components"

 export const Button = styled.button`
    background-color: #050605;
    color: white;
    padding:10px;
    border-radius: 8px;
    margin: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;
    &:hover{
        border: 1px solid black;
        background-color: #daacac;
        transition: 0.2s background ease-in;
    }
`
 export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
        border: 1px solid transparent;
        background-color:rgb(17, 16, 16);
        color: white;
    }
`