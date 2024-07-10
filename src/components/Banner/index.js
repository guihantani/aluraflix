import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerItem from './BannerItem';
import styles from './Banner.module.css'
import { useContext } from 'react';
import { VideoContext } from '../../context/VideoContext';

function Banner() {
  const {videos, categorys} = useContext(VideoContext)

  if(videos.length === 0){
    return(
      <h1>Não há vídeos disponíveis</h1>
    )
  }

  return (
    <section className={styles.banner}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {videos.map((video) => 
          <SwiperSlide key={video.id}>
              <BannerItem category={video.category} video={video} imgLink={video.image} videoLink={video.url} title={video.title} description={video.description}/>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
}

export default Banner;