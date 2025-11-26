import { SwiperControlIcon } from './icons';

const icons = {
  swiper: SwiperControlIcon,
} as const;

type IconName = keyof typeof icons;

interface IIconProps {
  name: IconName;
}

export function Icon({ name }: IIconProps) {
  const IconComponent = icons[name];

  return IconComponent ? <IconComponent /> : null;
}
