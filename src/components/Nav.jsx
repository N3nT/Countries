import { Link } from 'react-router-dom';
import ModeIcon from './ModeIcon';

const Nav = (props) => {
    return(
        <div className='w-full bg-white shadow-md dark:text-white dark:bg-darkModeEl flex justify-center'>
            <nav className="flex justify-between p-5 w-full max-w-[1920px]">
                <Link to="/">
                    <h1 className="font-bold cursor-pointer">Where in the word?</h1>
                </Link>
                <button className="capitalize flex cursor-pointer" onClick={props.handleDarkMode}><ModeIcon theme={props.theme}/>{props.theme} Theme</button>
            </nav>
        </div>
    )
}

export default Nav;