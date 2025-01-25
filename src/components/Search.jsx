function Search() {

    return(
        <div className="flex flex-col w-full items-start p-5">
            <input className="my-10 bg-white dark:bg-darkModeEl dark:text-white w-full py-3 px-5 shadow-md rounded-sm" type="text" placeholder="asd  Search for a country..."/>
            <select className="bg-white dark:bg-darkModeEl dark:text-white flex justify-center" name="" id="" placeholder="Search by Region">
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
            </select>
        </div>
    )
}

export default Search;