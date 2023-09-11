import {Button as MuiButton}  from '@mui/material';

export type ButtonSize = 'small'| 'medium';
export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  fullWidth?: boolean
  onClick?: () => void;
}

export const Button = ({
  children, ...rest
}: ButtonProps) => {
  return (
      <MuiButton {...rest}>{children}</MuiButton>
  );
}