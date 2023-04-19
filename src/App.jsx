import { useState } from 'react'
import styled from 'styled-components'

function App() {

  const ButtonStyled = styled.button`
  width: 100px;
  color: ${(props)=>props.bg?"white":"black"};;
  background-color: ${(props)=>props.bg?props.bg:"red"};
  `

  return (
    <div className="App">
      <ButtonStyled>Button1</ButtonStyled>
      <ButtonStyled bg="blue">Button2</ButtonStyled>
    </div>
  )
}

export default App
