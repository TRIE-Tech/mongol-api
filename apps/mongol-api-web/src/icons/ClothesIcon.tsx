import { BaseIconProps } from './types';

export const ClothesIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60 || width}
      height={60 || height}
      fill="none"
      {...props}
    >
      <path
        fill={'#D0D7E2' || color}
        d="M21 0h-3L0 9v18l12-3v36h36V24l12 3V9L42 0h-3a9 9 0 1 1-18 0Z"
      />
    </svg>
  );
};
