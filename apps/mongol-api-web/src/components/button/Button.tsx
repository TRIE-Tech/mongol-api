import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export type ButtonSize = 'small' | 'medium';
export interface BaseButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(MuiButton)<BaseButtonProps>(({ theme, size }) => {
  return {
    borderRadius: theme.spacing(4),
    padding: `${theme.spacing(6)} ${theme.spacing(12)}`,
    fontSize: theme.spacing(8),
    fontWeight: 500,
    lineHeight: 'normal',
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#00C0CC',
    '&:hover': {
      backgroundColor: '#002762',
    },

    ...(size === 'small' && {
      padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
      fontSize: theme.spacing(6),
    }),
  };
});

export const Button = ({ children, ...rest }: BaseButtonProps) => {
  return (
    <StyledButton disableRipple fullWidth {...rest}>
      {children}
    </StyledButton>
  );
};
