import { BrowserRouter, Routes , Route } from "react-router-dom";
import { useState } from 'react';

import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

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
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleDarkMode={handleDarkMode} theme={theme}/>}/>
            <Route path="/:slug" element={<Detail handleDarkMode={handleDarkMode} theme={theme}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
