import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

export interface FooterProps {
  colorMode?: 'dark' | 'light';
}

export const Footer = ({ colorMode }: FooterProps) => {
  const { palette } = useTheme();

  return (
    <Box
      height="83px"
      bgcolor={colorMode === 'dark' ? palette.primary[500] : 'common.white'}
      color={colorMode === 'dark' ? 'common.white' : 'common.black'}
    >
      <Container disableGutters maxWidth="lg">
        <Stack
          width="100%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="77px"
        >
          <Typography variant="subtitle1">
            ©{new Date().getFullYear()} All Right Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
