import styles from './CustomSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Dispatch, SetStateAction } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Card } from '../card';

interface ISwiperProps {
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
  data: IEvent[];
}

interface IEvent {
  id: string;
  date: number;
  title: string;
}

export function CustomSwiper({ setSwiper, data }: ISwiperProps) {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        slidesPerView="auto"
        onSwiper={setSwiper}
        grabCursor={true}
        watchSlidesProgress={true}
        breakpoints={{
          0: {
            spaceBetween: 25,
          },
          886: {
            spaceBetween: 40,
          },
          1280: {
            spaceBetween: 80,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={styles.newSlideClass}>
            <Card date={item.date} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
