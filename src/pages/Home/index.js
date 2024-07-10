import { useContext } from 'react'
import Banner from '../../components/Banner'
import BannerItem from '../../components/Banner/BannerItem'
import Container from '../../components/Container'
import Tag from '../../components/Tag'
import VideoSection from '../../components/VideoSection'
import styles from './Home.module.css'
import { VideoContext } from '../../context/VideoContext'

function Home(){
    const {categorys} = useContext(VideoContext);

    return(
        <Container>
            <Banner/>
            <div className={styles.container}>
                {categorys.map((category) => 
                    <VideoSection key={category.id} category={category}/>
                )}
            </div>
        </Container>
    )
}

export default Home