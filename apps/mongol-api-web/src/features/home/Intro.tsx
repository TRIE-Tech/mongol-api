import { Button } from '@components';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

export const Intro = () => {
  const { palette } = useTheme();

  return (
    <Box bgcolor="#FAF8FB" py="200px">
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
              Lorem ipsum dolor sit amet consectetur. Congue quam bibendum
              venenatis consectetur interdum pellentesque amet purus id.
              Senectus nunc risus sed nunc ultricies placerat proin. Ultricies
              luctus vel tortor eu elementum vulputate cursus
            </Typography>
            <Box width="176px">
              <Button>Explore</Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
