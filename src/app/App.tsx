import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import data from '../data.json';
import { useState } from 'react';
import { Header } from '@/components/ui';
import { CustomSwiper } from '@/components/swiper';
import { SwiperControls } from '@/components/swiper/swiper-controls';
import styles from './App.module.scss';
import { useSwiperControls } from '@/hook';
import { PeriodController } from '@/components/period-controller';
import { Pagination } from '@/components/pagination';

export default function App() {
  const historicalData = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState(
    historicalData[currentIndex]
  );

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const { isBeginning, isEnd } = useSwiperControls(swiper);

  const changePeriod = (i: number) => {
    setCurrentIndex(i);
    setCurrentPeriod(historicalData[i]);
    setActiveIndex(i);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <Header />
        <main className={styles.container}>
          <section className={styles.pagAndControlWrapper}>
            <PeriodController
              currentIndex={currentIndex}
              changePeriod={changePeriod}
            />
            <Pagination activeIndex={activeIndex} handleClick={changePeriod} />
          </section>
          <section className={styles.swiperWrapper}>
            <CustomSwiper setSwiper={setSwiper} data={currentPeriod.events} />
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
