import { BaseIconProps } from './types';

export const LogoIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44 || width}
      height={41 || height}
      fill="none"
      {...props}
    >
      <rect
        width={44}
        height={39.759}
        y={0.621}
        fill={'#F7F9FC' || color}
        rx={5}
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={2}
        d="m14.673 13.344 8.31 8.31-8.31 8.312M26.506 29.775H37.11"
      />
    </svg>
  );
};
