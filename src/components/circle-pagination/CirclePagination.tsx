import { TOTAL_POINTS } from '@/constants';
import styles from './CirclePagination.module.scss';
import { useRef } from 'react';
import data from '@/data.json';
import { useCirclePaginationRotation, useResizeCirclePagination } from '@/hook';

interface ICirclePaginationProps {
  activeIndex: number;
  changePeriod: (i: number) => void;
}

export function CirclePagination({
  activeIndex,
  changePeriod,
}: ICirclePaginationProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const { radius, circleStyle } = useResizeCirclePagination({ blockRef });

  useCirclePaginationRotation({ activeIndex, radius, wrappers, buttons });

  return (
    <div ref={blockRef} className={styles.circleSection}>
      {Array.from({ length: TOTAL_POINTS }, (_, i) => {
        return (
          <div
            className={styles.btnWrapper}
            key={`circle-${i + radius}`}
            ref={(el) => {
              wrappers.current[i] = el;
            }}
            style={circleStyle}
          >
            <button
              type="button"
              aria-label={`Посмотреть информацию об историческом периоде ${i + 1} - ${data[i].title}`}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              className={`${i === activeIndex ? styles.btnActive : styles.btnPassive}`}
              onClick={() => changePeriod(i)}
            >
              <span>{i + 1}</span>
              <span className={styles.btnTitle}>{data[i].title}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
