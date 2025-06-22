import styled from "styled-components"


const Todolist = ({task}) => {
  return (
    <Box>
      <p>{task}</p>
    </Box>
  )
}

export default Todolist
const Box = styled.div`
    background-color: #75a9d6;
    border: 1px solid red;
    margin-top:10px;
    padding: 0 8px;
`