import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import data from '../data.json';
import { useState } from 'react';
import { Header } from '@/components/ui';
import { CustomSwiper } from '@/components/swiper';
import { SwiperControls } from '@/components/swiper/swiper-controls';
import styles from './App.module.scss';
import { useSwiperControls } from '@/hook';

export default function App() {
  const historicalData = data;
  const [activeIndex, setActiveIndex] = useState(0);

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const { isBeginning, isEnd } = useSwiperControls(swiper);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <Header />
        <main>
          <section className={styles.swiperWrapper}>
            <CustomSwiper
              setSwiper={setSwiper}
              data={historicalData[activeIndex].events}
            />
            <SwiperControls
              swiper={swiper}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
