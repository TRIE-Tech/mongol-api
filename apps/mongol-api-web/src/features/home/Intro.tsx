import { Button } from '@components';
import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const Intro = () => {
  return (
    <Box bgcolor="primary.500" width="100vw" height="100%">
      <Container disableGutters maxWidth="lg">
        <Stack direction="row" justifyContent="center">
          <Stack
            direction="row"
            spacing={6}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            minHeight="100%"
          >
            <Stack direction="column" maxWidth="602px" py="168px">
              <Typography variant="h1" color="#F7F9FC">
                Welcome to MongolAPI
              </Typography>
              <Typography variant="body1" color="#F7F9FC" pt={12} pb={16}>
                Lorem ipsum dolor sit amet consectetur. Congue quam bibendum
                venenatis consectetur interdum pellentesque amet purus id.
                Senectus nunc risus sed nunc ultricies placerat proin. Ultricies
                luctus vel tortor eu elementum vulputate cursus
              </Typography>
              <Box sx={{ width: '265px' }}>
                <Button>Explore</Button>
              </Box>
            </Stack>
          </Stack>
          <Stack
            width="100%"
            maxWidth="596px"
            height="566px"
            position={'relative'}
          >
            <Image
              style={{ marginBottom: '80px' }}
              fill
              src={`/images/home-intro-image.png`}
              alt="picture"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
