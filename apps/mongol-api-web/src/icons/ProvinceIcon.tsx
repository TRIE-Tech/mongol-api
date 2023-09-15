import { BaseIconProps } from './types';

export const ProvinceIcon = (props: BaseIconProps) => {
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
        d="M37.333 39.512 18.667 34.96 0 40V4.932L18.667.488 37.333 5.04 56 0v35.068l-18.667 4.444Zm-3.11-5.312V8.835L21.777 5.799v25.366L34.222 34.2Z"
      />
    </svg>
  );
};
