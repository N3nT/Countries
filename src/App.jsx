import viteLogo from '/vite.svg'
import { useState } from 'react';

import Nav from './components/Nav.jsx';

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
    <div className="text-lightModeTxt bg-lightModeBackground h-screen dark:bg-darkModeBg" data-theme={theme}>
      <Nav theme={theme} handleDarkMode={handleDarkMode}/>
    </div>
  )
}

export default App
