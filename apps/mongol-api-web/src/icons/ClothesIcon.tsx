import { BaseIconProps } from './types';

export const ClothesIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56 || width}
      height={40 || height}
      fill="none"
      {...props}
    >
      <path
        fill={'#D0D7E2' || color}
        d="M19.6 0h-2.8L0 6v12l11.2-2v24h33.6V16L56 18V6L39.2 0h-2.8c0 1.591-.885 3.117-2.46 4.243C32.364 5.368 30.228 6 28 6s-4.364-.632-5.94-1.757C20.485 3.117 19.6 1.59 19.6 0Z"
      />
    </svg>
  );
};
