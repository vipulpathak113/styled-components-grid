import styled, { keyframes } from "styled-components";

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
    // here we can also use function to recieve props
    background-color: green;
  `;

  const rotate = keyframes`
   from {
    transform: rotate(0deg);
   }
   to {
    transform: rotate(360deg);
   }
  `;

  const ImageAnimated = styled.img`
    animation: ${rotate} 10s linear infinite;
    width:50px;
    height: 50px;
  `;

  return (
    <div className="App">
      <ButtonStyled>Button</ButtonStyled>
      <ButtonStyled bg="blue">Button Props</ButtonStyled>
      <ButtonExtended>Button extended</ButtonExtended>
      <ButtonPsuedo>Button Psuedo</ButtonPsuedo>
      <ButtonAttributes>Button Attributes</ButtonAttributes>
      <ImageAnimated src="/vite.svg" />
    </div>
  );
}

export default App;
