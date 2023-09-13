import { BaseIconProps } from './types';

export const InstrumentsIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70 || width}
      height={70 || height}
      fill="none"
      {...props}
    >
      <path
        fill={'#D0D7E2' || color}
        d="M63 14h-7V7c0-3.86-3.14-7-7-7H21c-3.86 0-7 3.14-7 7v7H7c-3.86 0-7 3.14-7 7v42c0 3.86 3.14 7 7 7h56c3.86 0 7-3.14 7-7V21c0-3.86-3.14-7-7-7ZM21 7h28v7H21V7Zm-7 52.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM14 49a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm10.5 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0-10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM35 59.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM35 49a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm10.5 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0-10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM56 59.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM56 49a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm7-14H7V21h56v14Z"
      />
    </svg>
  );
};
