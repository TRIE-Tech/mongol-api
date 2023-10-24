import { BaseIconProps } from './types';

export const InstrumentsIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 56}
      height={height ?? 40}
      fill="none"
      {...props}
    >
      <path
        fill={color ?? '#D0D7E2'}
        d="M27.283 0h-2.872v8.4c-.287.2-.574.2-.861.6L.29 37.4C-.573 38.6.576 40 2.586 40h37.619v-4H8.043l17.804-21.6 16.369 20 4.882-2L28.145 8.8l-.862-.6V0Zm27.281 8h-2.871v24l-1.436 8H56l-1.436-8V8Z"
      />
    </svg>
  );
};
