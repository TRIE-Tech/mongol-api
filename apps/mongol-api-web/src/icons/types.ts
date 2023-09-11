import { Palette } from '@mui/material';

export type BaseIconProps = {
  color?: keyof Palette['text'] | string;
  width?: string | number;
  height?: string | number;
};
