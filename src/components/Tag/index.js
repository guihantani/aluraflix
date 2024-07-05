import styles from './Tag.module.css'

function Tag({category, width, height, fontSize}){
    let tagColor = ''
    let tagText = ''

    if(category === 'Front End'){
        tagColor = '#6bd1ff'
        tagText = 'FRONT END'
    }
    else if(category === 'Back End'){
        tagColor = '#00c86f'
        tagText = 'BACK END'
    }
    else if(category === 'Mobile'){
        tagColor = '#ffba05'
        tagText = 'MOBILE'
    }

    return(
        <div className={styles.tag} style={{backgroundColor: `${tagColor}`, width:`${width}`, height:`${height}`, fontSize:`${fontSize}`, lineHeight:`${height}`}}>{tagText}</div>
    )
}

export default Tag