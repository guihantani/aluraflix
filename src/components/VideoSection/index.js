import { useContext } from 'react'
import Tag from '../Tag'
import VideoCard from './VideoCard'
import styles from './VideoSection.module.css'
import { VideoContext } from '../../context/VideoContext'

function VideoSection({category}){
    const {videos} = useContext(VideoContext)

    const filteredVideos = videos.filter(function(video){return video.category === category.name})

    return(
        <section className={styles.videoSection}>
            <Tag category={category.name} width='432px' height='70px' fontSize='32px'/>
            <div className={styles.videoContainer}>
                {filteredVideos.map((video) => <VideoCard key={video.id} className={styles.video} video={video}/>)}
            </div>
        </section>
    )
}

export default VideoSection