function Country(props){
    return(
        <div className="flex flex-col mx-10 my-10 bg-white rounded-md dark:bg-darkModeEl dark:text-white">
            <img className="rounded-t-md" src={props.countryData.flags.svg}/>
            <div className="p-8">
                <h2 className="font-bold mb-2">{props.countryData.name}</h2>
                <p><span className="font-medium">Population: </span>{props.countryData.population}</p>
                <p><span className="font-medium">Region: </span>{props.countryData.region}</p>
                <p><span className="font-medium">Capital: </span>{props.countryData.capital}</p>
            </div>
        </div>
    )
}

export default Country;