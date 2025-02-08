import { BrowserRouter, Routes , Route } from "react-router-dom";
import { useState } from 'react';

import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

const App = () => {

  const [theme, setTheme] = useState('light');
  const [searchBar, setSearchBar] = useState('');
  const [regionSelect, setRegionSelect] = useState('');

  const handleDarkMode = () => {
    if(theme === "light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }

  return (
    <div data-theme={theme} className="font-nunitoSans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleDarkMode={handleDarkMode} setSearchBar={setSearchBar} searchBar={searchBar} theme={theme} regionSelect={regionSelect} setRegionSelect={setRegionSelect}/>}/>
            <Route path="/:slug" element={<Detail handleDarkMode={handleDarkMode} theme={theme}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
