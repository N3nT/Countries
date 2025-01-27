import Nav from '../components/Nav.jsx'
import Search from '../components/Search.jsx'
import Country from '../components/Country.jsx'

import data from '../data.json'

function Home(props) {
	return (
		<div className='text-lightModeTxt bg-lightModeBackground dark:bg-darkModeBg flex flex-col items-center min-h-screen'>
			<Nav handleDarkMode={props.handleDarkMode} theme={props.theme} />
			<div className='max-w-[1920px] min-w-full'>
				<Search
					searchBar={props.searchBar}
					setSearchBar={props.setSearchBar}
					setRegionSelect={props.setRegionSelect}
				/>
				<div className='flex flex-wrap justify-center'>
					{data.map((country, index) => {
						if (props.regionSelect === '') {
							if (
								country.name
									.toLowerCase()
									.includes(props.searchBar.toLowerCase())
							) {
								return (
									<Country
										key={index}
										countryData={country}
										slug={country.alpha3Code}
									/>
								)
							}
						} else {
							if (
								country.name
									.toLowerCase()
									.includes(props.searchBar.toLowerCase()) &&
								country.region === props.regionSelect
							) {
								return (
									<Country
										key={index}
										countryData={country}
										slug={country.alpha3Code}
									/>
								)
							}
						}
						return null
					})}
				</div>
			</div>
		</div>
	)
}

export default Home
