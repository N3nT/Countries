import { Sun, Moon } from 'lucide-react';
function ModeIcon(props){
    if(props.theme === "light"){
        return <Sun className='mx-2'/>
    }else{
        return <Moon className='mx-2'/>
    }
}

export default ModeIcon;