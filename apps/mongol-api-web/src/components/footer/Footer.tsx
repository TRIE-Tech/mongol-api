import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

export interface FooterProps {
  backgroundColor: string;
}

export const Footer = ({ backgroundColor }: FooterProps) => {
  const { palette } = useTheme();

  return (
    <Box bgcolor={backgroundColor} color={palette.blue[200]}>
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
