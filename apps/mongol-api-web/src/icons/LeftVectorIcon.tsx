import { BaseIconProps } from './types';

export const LeftVectorIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 4}
      height={height ?? 10}
      fill="none"
      {...props}
    >
      <path
        fill={color ?? '#002762'}
        d="M.153 9.78A.944.944 0 0 1 0 9.248c0-.199.055-.39.153-.531l2.586-3.722-2.586-3.72a.952.952 0 0 1-.147-.53A.942.942 0 0 1 .16.22C.256.08.387.002.524 0c.137-.002.27.074.368.211l2.955 4.253A.944.944 0 0 1 4 4.995c0 .2-.055.391-.153.532L.892 9.78c-.098.14-.231.22-.37.22-.138 0-.271-.08-.369-.22Z"
      />
    </svg>
  );
};
