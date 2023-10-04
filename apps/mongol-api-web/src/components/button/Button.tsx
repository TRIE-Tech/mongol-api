import { Typography } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface BaseButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(MuiButton)<BaseButtonProps>(({ theme }) => {
  return {
    borderRadius: theme.spacing(2),
    padding: `${theme.spacing(6)} ${theme.spacing(12)}`,
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#345EED',
    height: '54px',
    '&:hover': {
      backgroundColor: '#002762',
    },
  };
});

export const Button = ({ children, ...rest }: BaseButtonProps) => {
  return (
    <StyledButton disableRipple fullWidth {...rest}>
      <Typography fontSize="18px" fontWeight="600" lineHeight="normal">
        {children}
      </Typography>
    </StyledButton>
  );
};
