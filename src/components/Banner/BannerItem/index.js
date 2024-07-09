import Tag from '../../Tag'
import styles from './BannerItem.module.css'

function BannerItem({category, imgLink, videoLink, title, description}){
    return(
        <section className={styles.bannerItem} style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${imgLink})`}}>
            <div className={styles.container}>
                <div>
                    <Tag category={category} width='296.8px' height='90px' fontSize='48px'/>
                    <div className={styles.text}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <a href={videoLink}><img className={styles.image} src={imgLink} alt={title}/></a>
            </div>
        </section>
    )
}

export default BannerItem