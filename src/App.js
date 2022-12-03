import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, setUpdateTheme] = useState("Light")

  return (
    <ThemeContext.Provider value={{theme, setUpdateTheme}}>
      <div className="App">
        <Header></Header>
        <div className='container__characters' id={theme}>
          <Characters></Characters>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
