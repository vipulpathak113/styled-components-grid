import styled from "styled-components";

function App() {
  const ButtonStyled = styled.button`
    width: 100px;
    color: ${(props) => (props.bg ? "white" : "black")};
    background-color: ${(props) => (props.bg ? props.bg : "khaki")};
  `;

  const ButtonExtended = styled(ButtonStyled)`
    // here we extended the styles previously used
    border-radius: 50px;
  `;
  const ButtonPsuedo = styled(ButtonStyled)`
    &:hover {
      cursor: grabbing;
    }
  `;

  const ButtonAttributes = styled(ButtonStyled).attrs({ type: "submit" })`
    background-color: green;
  `;

  return (
    <div className="App">
      <ButtonStyled>Button1</ButtonStyled>
      <ButtonStyled bg="blue">Button2</ButtonStyled>

      <ButtonExtended>Button extended</ButtonExtended>
      <ButtonPsuedo>Psuedo button</ButtonPsuedo>
      <ButtonAttributes>Button Attributes</ButtonAttributes>
    </div>
  );
}

export default App;
