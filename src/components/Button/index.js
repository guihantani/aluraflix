import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({isNavigation = false, targetPage, children, isActive = false, borderColor = '#f5f5f5', type = null}){
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

    if(!isNavigation){
        return(
            <button 
                type={type}
                className={styles.button} 
                style={{color: '#fff', border: `solid 2px ${borderColor}`, boxShadow: 'none', backgroundColor: 'transparent'}}>
                {children}
            </button> 
        )
    }
}

export default Button