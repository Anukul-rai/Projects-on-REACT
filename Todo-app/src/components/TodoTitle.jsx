import styled from "styled-components"

const TodoTitle = () => {
  return (
    <Title>
      <h1>Todo List</h1>
    </Title>
  )
}

export default TodoTitle

const Title = styled.div`
  text-align: center;
  font-size: 29px;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`