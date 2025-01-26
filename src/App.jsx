import { useState } from 'react';

import Nav from './components/Nav.jsx';
import Search from './components/Search.jsx';
import Country from './components/Country.jsx';

import data from '../data.json';

function App() {
  const[theme, setTheme] = useState('light');

  const handleDarkMode = () => {
    if(theme === "light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }

  return (
    <div className="text-lightModeTxt bg-lightModeBackground dark:bg-darkModeBg flex flex-col" data-theme={theme}>
      <Nav theme={theme} handleDarkMode={handleDarkMode}/>
      <Search/>
      {
        data.map((country, index) => {
            return(<Country key={index} countryData={country}/>)
        })
      }
    </div>
  )
}

export default App
