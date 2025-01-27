import { useState } from 'react';

import Nav from '../components/Nav.jsx';
import Search from '../components/Search.jsx';
import Country from '../components/Country.jsx';

import data from '../data.json';

function Home(props) {
  return (
    <div className="text-lightModeTxt bg-lightModeBackground dark:bg-darkModeBg flex flex-col items-center">
      <Nav theme={props.theme} handleDarkMode={props.handleDarkMode}/>
      <div className='max-w-[1920px]'>
        <Search/>
        <div className='flex flex-wrap justify-center'>
            {data.map((country, index) => {
              // if(index < 10){
                return(<Country key={index} countryData={country} slug={country.alpha3Code}/>)
              //}
            })}
        </div>
      </div>
    </div>
  )
}

export default Home;
