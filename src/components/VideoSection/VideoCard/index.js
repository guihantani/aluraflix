import styles from './VideoCard.module.css'

function VideoCard({category, imgLink, description}){
    return(
        <div className={styles.videoCard}>
            <img src={imgLink} alt={description} />
            <div className={styles.bar}>
                <button class="btn" ><i class="fa fa-trash fa-2x"></i> DELETAR</button>
                <button class="btn" ><i class="fa fa-pencil-square-o fa-2x"></i> EDITAR</button>
            </div>
        </div>
    )
}

export default VideoCard