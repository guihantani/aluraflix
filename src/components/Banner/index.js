import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerItem from './BannerItem';
import styles from './Banner.module.css'

function Banner() {
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
        <SwiperSlide>
            <BannerItem category='Front End' imgLink='https://img.youtube.com/vi/lwBnRXBMOpE/0.jpg' videoLink='https://www.youtube.com/watch?v=lwBnRXBMOpE' title='teste' description='Testo teste asdiasdjqaiwdjidjiawjdwajidawjidjkawidjiawdjiaw'/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerItem category='Back End' imgLink='https://img.youtube.com/vi/lwBnRXBMOpE/0.jpg' videoLink='https://www.youtube.com/watch?v=lwBnRXBMOpE' title='teste' description='Testo teste asdiasdjqaiwdjidjiawjdwajidawjidjkawidjiawdjiaw'/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerItem category='Mobile' imgLink='https://img.youtube.com/vi/lwBnRXBMOpE/0.jpg' videoLink='https://www.youtube.com/watch?v=lwBnRXBMOpE' title='teste' description='Testo teste asdiasdjqaiwdjidjiawjdwajidawjidjkawidjiawdjiaw'/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Banner;