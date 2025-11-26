import { useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export function useSwiperControls(swiper: SwiperType | null) {
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const updateControls = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    const updateBeginning = () => {
      setIsBeginning(true);
    };

    const updateEnd = () => {
      setIsEnd(true);
    };

    updateControls();
    swiper.on('slideChange', updateControls);
    swiper.on('reachBeginning', updateBeginning);
    swiper.on('reachEnd', updateEnd);

    return () => {
      swiper.off('slideChange', updateControls);
      swiper.off('reachBeginning', updateBeginning);
      swiper.off('reachEnd', updateEnd);
    };
  }, [swiper]);

  return {
    isBeginning,
    isEnd,
  };
}
