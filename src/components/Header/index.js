import styles from './Header.module.css'
import Button from '../Button'
import { useLocation } from 'react-router-dom';

function Header(){
    const currentLocation = useLocation();
    let headerColor = ''
    let activeButton = '';

    if(currentLocation.pathname === '/'){
        activeButton = 'home'
        headerColor = '#262626'
    }
    else if (currentLocation.pathname === '/NewVideo'){
        activeButton = 'newvideo'
        headerColor = 'rgba(0, 0, 0, 0.9)'
    }

    return(
        <header className={styles.header} style={{backgroundColor: `${headerColor}`}}>
            <img src='/images/aluralogo.png'/>
            <div>
                {activeButton === 'home' ? 
                    <Button isNavigation isActive targetPage={'/'}>HOME</Button> : <Button isNavigation targetPage={'/'}>HOME</Button>
                }
                {activeButton === 'newvideo' ? 
                    <Button isNavigation isActive targetPage={'/NewVideo'}>NOVO VÍDEO</Button> : 
                    <Button isNavigation targetPage={'/NewVideo'}>NOVO VÍDEO</Button>
                }
            </div>
        </header>
    )
}

export default Header