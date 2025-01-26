import { useState } from 'react';

import Nav from './components/Nav.jsx';
import Search from './components/Search.jsx';

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
    <div className="text-lightModeTxt bg-lightModeBackground h-screen dark:bg-darkModeBg flex flex-col" data-theme={theme}>
      <Nav theme={theme} handleDarkMode={handleDarkMode}/>
      <Search/>
    </div>
  )
}

export default App
