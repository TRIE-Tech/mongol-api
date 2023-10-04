import { BaseIconProps } from './types';

export const LogoIcon = (props: BaseIconProps) => {
  const { width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44 || width}
      height={40 || height}
      fill="none"
      {...props}
    >
      <rect width={44} height={39.759} y={0.121} fill="#345EED" rx={5} />
      <g filter="url(#a)">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
          d="m14.673 12.844 8.31 8.31-8.31 8.312"
        />
      </g>
      <g filter="url(#b)">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
          d="M26.506 29.275H37.11"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={12.725}
          height={18.623}
          x={11.673}
          y={11.844}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_811_755"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_811_755"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          width={14.602}
          height={2}
          x={23.506}
          y={28.275}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_811_755"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_811_755"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
