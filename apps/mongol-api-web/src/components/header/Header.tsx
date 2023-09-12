import { Box, Typography, Stack, Container, useTheme } from '@mui/material';
import { LogoIcon } from '@icons';

export const Header = () => {
  const { palette } = useTheme();
  return (
    <Box bgcolor="primary.500" sx={{ color: 'white' }}>
      <Container disableGutters maxWidth="lg">
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="77px"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LogoIcon />
            <Box sx={{ marginLeft: '20px' }}>
              <Typography variant="subtitle1">MongolAPI</Typography>
            </Box>
          </Box>

          <Stack direction={'row'} spacing={24}>
            <Typography variant="subtitle1">Home</Typography>
            <Typography variant="subtitle1">Docs</Typography>
            <Typography variant="subtitle1">GitHub</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
