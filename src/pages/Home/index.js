import Banner from '../../components/Banner'
import BannerItem from '../../components/Banner/BannerItem'
import Container from '../../components/Container'
import Tag from '../../components/Tag'
import VideoSection from '../../components/VideoSection'
import styles from './Home.module.css'

function Home(){
    return(
        <Container>
            <Banner/>
            <div className={styles.container}>
                <VideoSection/>
                <VideoSection/>
                <VideoSection/>
            </div>
        </Container>
    )
}

export default Home