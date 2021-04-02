import React , {useState} from 'react'
import './App.css';
import logo from './logo.svg';
import Form from './components/Form'
import Login from './components/login'
import styled, { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles } from './components/themes'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp> <button onClick={() => themeToggler()}>Change Theme</button>
      </StyledApp>
    </ThemeProvider>
      <Form/>
      <Login />
      {/*<Counter/>*/}
      {/*< Message/> */} 
      { /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */ }
    </div>
    
  );
}

export default App;
