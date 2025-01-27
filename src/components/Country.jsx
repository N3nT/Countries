import { Link } from 'react-router-dom';

function Country(props){
    return(
        <div className="flex flex-col m-10 bg-white rounded-md dark:bg-darkModeEl dark:text-white max-w-90">
            <Link to={props.slug}>
                <img className="rounded-t-md md:min-h-[240px] md:max-h-[240px] md:min-w-[360px] md:max-w-[360px]" src={props.countryData.flags.svg}/>
                <div className="p-8">
                    <h2 className="font-bold mb-2">{props.countryData.name}</h2>
                    <p><span className="font-medium">Population: </span>{props.countryData.population}</p>
                    <p><span className="font-medium">Region: </span>{props.countryData.region}</p>
                    <p><span className="font-medium">Capital: </span>{props.countryData.capital}</p>
                </div>
            </Link>
        </div>
    )
}

export default Country;