import { BaseIconProps } from './types';

export const GroupsIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70 || width}
      height={60 || height}
      fill="none"
      {...props}
    >
      <path
        fill={'#D0D7E2' || color}
        d="M38.5 35.5a14 14 0 0 1 14 14v5.25A5.25 5.25 0 0 1 47.25 60h-42A5.25 5.25 0 0 1 0 54.75V49.5a14 14 0 0 1 14-14h24.5Zm21 0A10.5 10.5 0 0 1 70 46v5.25a5.25 5.25 0 0 1-5.25 5.25H59.5v-7a17.471 17.471 0 0 0-7-14h7ZM26.25.5a15.75 15.75 0 1 1 0 31.5 15.75 15.75 0 0 1 0-31.5ZM56 11a10.5 10.5 0 1 1 0 21 10.5 10.5 0 0 1 0-21Z"
      />
    </svg>
  );
};
