import Tag from '../../Tag'
import styles from './BannerItem.module.css'

function BannerItem({category, video}){
    let fontSize = '48px'

    if(category === 'inovacao_gestao'){
        fontSize = '29px';
    }

    return(
        <section className={styles.bannerItem} style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${video.image})`}}>
            <div className={styles.container}>
                <div>
                    <Tag category={category} width='296.8px' height='90px' fontSize={fontSize}/>
                    <div className={styles.text}>
                        <h1>{video.title}</h1>
                        <p>{video.description}</p>
                    </div>
                </div>
                <a href={video.url}><img className={styles.image} src={video.image} alt={video.title}/></a>
            </div>
        </section>
    )
}

export default BannerItem