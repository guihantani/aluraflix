import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({isNavigation = false, targetPage, children, isActive = false}){
    if(isNavigation && isActive){
        return(
            <Link to={targetPage}>
                <button className={styles.button}>
                    {children}
                </button>
            </Link>
        )
    }
    else if(isNavigation && !isActive){
        return(
            <Link to={targetPage}>
                <button className={styles.button} style={{color: '#fff', border: 'solid 2px #f5f5f5', boxShadow: 'none', backgroundColor: 'transparent'}}>
                    {children}
                </button>
            </Link>
        )
    }
}

export default Button