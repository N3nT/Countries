import Dropdown from "./Dropwdown";

function Search() {
    return(
        <div className="flex flex-col w-full items-start p-5">
            <input className="my-10 bg-white dark:bg-darkModeEl dark:text-white w-full py-3 px-5 shadow-md rounded-sm text-lightModeInput" type="text" placeholder="Search for a country..."/>
            <Dropdown/>
        </div>
    )
}

export default Search;