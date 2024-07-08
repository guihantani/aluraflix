import Banner from '../../components/Banner'
import BannerItem from '../../components/Banner/BannerItem'
import Tag from '../../components/Tag'
import VideoSection from '../../components/VideoSection'
import styles from './Home.module.css'

function Home(){
    return(
        <section className={styles.home}>
            {/*<BannerItem category='Front End' imgLink='https://img.youtube.com/vi/lwBnRXBMOpE/0.jpg' title='teste' description='Testo teste asdiasdjqaiwdjidjiawjdwajidawjidjkawidjiawdjiaw'/>*/}
            <Banner/>
            <div className={styles.container}>
                <VideoSection/>
            </div>
        </section>
    )
}

export default Home