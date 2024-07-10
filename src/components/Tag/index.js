import { useContext } from 'react'
import styles from './Tag.module.css'
import { VideoContext } from '../../context/VideoContext';

function Tag({category, width, height, fontSize = '29px'}){

    const {categorys} = useContext(VideoContext);

    const result = categorys.filter(function(s){
        return s.name === category;
    });
    
    if(result.length){
        return(
            <div className={styles.tag} style={{backgroundColor: `${result[0].tagColor}`, width:`${width}`, height:`${height}`, fontSize:`${fontSize}`, lineHeight:`${height}`}}>{result[0].tagText}</div>
        )
    }

    return(
        <></>
    )
}

export default Tag