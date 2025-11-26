import { Icon } from '@/components/ui/icon';
import styles from './SwiperControls.module.scss';
import type { Swiper as SwiperType } from 'swiper';

interface ISwiperControlsProps {
  swiper: SwiperType | null;
  isBeginning: boolean;
  isEnd: boolean;
}

export function SwiperControls({
  swiper,
  isBeginning,
  isEnd,
}: ISwiperControlsProps) {
  return (
    <>
      {!isBeginning && (
        <button
          aria-label="Перейти к предыдущему слайду"
          type="button"
          className={`${styles.control} ${styles.left}`}
          onClick={() => swiper?.slidePrev()}
        >
          <Icon name="swiper" />
        </button>
      )}
      {!isEnd && (
        <button
          aria-label="Перейти к следующему слайду"
          type="button"
          className={`${styles.control} ${styles.right}`}
          onClick={() => swiper?.slideNext()}
        >
          <Icon name="swiper" />
        </button>
      )}
    </>
  );
}
