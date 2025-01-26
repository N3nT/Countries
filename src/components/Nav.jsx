import ModeIcon from './ModeIcon'

function Nav(props) {
    return(
        <nav className="flex justify-between p-5 bg-white shadow-md dark:text-white dark:bg-darkModeEl">
            <h1 className="font-bold">Where in the word?</h1>
            <button className="capitalize flex" onClick={props.handleDarkMode}><ModeIcon theme={props.theme}/>{props.theme} Theme</button>
        </nav>
    )
}

export default Nav;