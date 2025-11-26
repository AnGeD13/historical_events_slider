import { CIRCLE_ROTATION_BTN_SIZE, STEP } from "@/constants";
import { RefObject, useEffect } from "react";
import { gsap } from 'gsap';

interface IRotationProps {
  activeIndex: number;
  radius: number;
  wrappers: RefObject<(HTMLDivElement | null)[]>;
  buttons: RefObject<(HTMLButtonElement | null)[]>;
}

export function useCirclePaginationRotation({
  activeIndex, radius, wrappers, buttons
}: IRotationProps) {
  useEffect(() => {
    const targetRotation = -activeIndex * STEP;

    wrappers.current.forEach((el, i) => {
      const button = buttons.current[i];
      if (!el || !button) return;

      const baseAngle = i * STEP + 30;
      const targetAngle = baseAngle + targetRotation;
      const current = gsap.getProperty(el, 'rotation') as number;

      const diff = ((((targetAngle - current) % 360) + 540) % 360) - 180;

      const finalAngle = current + diff;

      gsap.to(el, {
        rotation: finalAngle,
        duration: 0.8,
        ease: 'power3.inOut',
        force3D: true,
        transformOrigin: `center ${radius + CIRCLE_ROTATION_BTN_SIZE / 2}px`,
        overwrite: true,
      });

      gsap.to(button, {
        rotation: -finalAngle,
        duration: 0.8,
        ease: 'power3.inOut',
        overwrite: true,
      });
    });
  }, [activeIndex, radius]);
}