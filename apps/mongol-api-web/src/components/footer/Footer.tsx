import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

export interface FooterProps {
  colorMode?: 'dark' | 'light';
}

export const Footer = ({ colorMode }: FooterProps) => {
  const { palette } = useTheme();

  return (
    <Box
      bgcolor={colorMode === 'dark' ? palette.primary[500] : 'common.white'}
      color={colorMode === 'dark' ? 'common.white' : 'common.black'}
    >
      <Container disableGutters maxWidth="lg">
        <Stack
          width="100%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="54px"
        >
          <Typography
            variant="subtitle1"
            color={palette.secondary[100]}
            fontWeight="400"
            fontSize="16px"
            lineHeight="19.09px"
          >
            ©{new Date().getFullYear()} All Right Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
