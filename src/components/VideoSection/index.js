import Tag from '../Tag'
import VideoCard from './VideoCard'
import styles from './VideoSection.module.css'

function VideoSection(){
    return(
        <section className={styles.videoSection}>
            <Tag category={'Front End'} width='432px' height='70px' fontSize='32px'/>
            <div className={styles.videoContainer}>
                <VideoCard className={styles.video} category='Front End' imgLink='https://img.youtube.com/vi/lwBnRXBMOpE/0.jpg' description='Testo teste asdiasdjqaiwdjidjiawjdwajidawjidjkawidjiawdjiaw'/>
                <VideoCard className={styles.video} category='Front End' imgLink='https://img.youtube.com/vi/lwBnRXBMOpE/0.jpg' description='Testo teste asdiasdjqaiwdjidjiawjdwajidawjidjkawidjiawdjiaw'/>
                <VideoCard className={styles.video} category='Front End' imgLink='https://img.youtube.com/vi/lwBnRXBMOpE/0.jpg' description='Testo teste asdiasdjqaiwdjidjiawjdwajidawjidjkawidjiawdjiaw'/>
            </div>
        </section>
    )
}

export default VideoSection