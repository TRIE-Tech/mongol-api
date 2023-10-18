import { Button } from '@components';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

export const Intro = () => {
  const { palette } = useTheme();

  return (
    <Box bgcolor="#FAF8FB" py="228px" data-cy="Home-Intro-Container">
      <Container disableGutters sx={{ maxWidth: '1200px' }} maxWidth={false}>
        <Stack direction="row">
          <Stack
            direction="column"
            justifyContent="center"
            maxWidth={550}
            minHeight={300}
          >
            <Typography variant="h2" color={palette.blue[200]} pb={8}>
              Welcome to mongol-api
            </Typography>
            <Typography variant="subtitle2" color="#000" pb={8}>
              We aim to share Mongolian culture with the world through our API.
              This service provides a platform which users can request
              information related to Mongolian culture, history, and language.
            </Typography>
            <Box width="176px">
              <Link href="/docs">
                <Button>Explore</Button>
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
