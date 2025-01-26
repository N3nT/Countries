import ModeIcon from './ModeIcon'

function Nav(props) {
    return(
        <div className='w-full bg-white shadow-md dark:text-white dark:bg-darkModeEl flex justify-center'>
            <nav className="flex justify-between p-5 w-full max-w-[1920px]">
                <h1 className="font-bold">Where in the word?</h1>
                <button className="capitalize flex" onClick={props.handleDarkMode}><ModeIcon theme={props.theme}/>{props.theme} Theme</button>
            </nav>
        </div>
    )
}

export default Nav;