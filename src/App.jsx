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
    <div className="text-lightModeTxt bg-lightModeBackground dark:bg-darkModeBg flex flex-col items-center" data-theme={theme}>
      <Nav theme={theme} handleDarkMode={handleDarkMode}/>
      <div className='max-w-[1920px]'>
        <Search/>
        <div className='flex flex-wrap justify-center'>
        {data.map((country, index) => {
            if(index < 10){
              return(<Country key={index} countryData={country}/>)
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default App
