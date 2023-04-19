import styled, { keyframes,ThemeProvider } from "styled-components";


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

const theme = {
dark:{
  primary: "black",
  text: "white"
},
light:{
  primary: "white",
  text: "black"
}
}

const ButtonTheme = styled(ButtonStyled)`
background-color: ${(props)=> props.theme.dark.primary};
color: ${(props)=> props.theme.dark.text};
`

function App() {


  return (
   
    <div className="App">
       <ThemeProvider theme={theme}>
      <ButtonStyled>Button</ButtonStyled>
      <ButtonStyled bg="blue">Button Props</ButtonStyled>
      <ButtonExtended>Button extended</ButtonExtended>
      <ButtonPsuedo>Button Psuedo</ButtonPsuedo>
      <ButtonAttributes>Button Attributes</ButtonAttributes>
      <ImageAnimated src="/vite.svg" />
      <ButtonTheme>Button Theme</ButtonTheme>
      </ThemeProvider>
    </div>

  );
}

export default App;
