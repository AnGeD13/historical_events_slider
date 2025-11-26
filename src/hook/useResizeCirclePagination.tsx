import { CIRCLE_ROTATION_BTN_SIZE, DEFLECTION_ANGLE } from '@/constants';
import { RefObject, useEffect, useMemo, useState } from 'react';

interface IProps {
  blockRef: RefObject<HTMLDivElement | null>;
}

export function useResizeCirclePagination({ blockRef }: IProps) {
  const [radius, setRadius] = useState<number>(265);

  const circleStyle = useMemo(
    () => ({
      position: 'absolute' as const,
      top: `calc(50% - ${CIRCLE_ROTATION_BTN_SIZE / 2}px)`,
      left: `calc(50% - ${CIRCLE_ROTATION_BTN_SIZE / 2}px)`,
      width: CIRCLE_ROTATION_BTN_SIZE,
      height: CIRCLE_ROTATION_BTN_SIZE,
      borderRadius: '50%',
      transform: `translateY(-${radius}px) rotate(${DEFLECTION_ANGLE}deg)`,
    }),
    [radius]
  );

  useEffect(() => {
    const block = blockRef.current;
    if (!block) return;

    const updateRadius = () => {
      const newRadius = block.offsetWidth / 2;
      setRadius(newRadius);
    };

    updateRadius();

    const observer = new ResizeObserver(() => {
      updateRadius();
    });

    observer.observe(block);

    const handleWindowResize = () => updateRadius();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return {
    radius,
    circleStyle,
  };
}
