import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const Intro = () => {
  return (
    <Box bgcolor="primary.500" width="100vw" minHeight="calc(100% - 77px)">
      <Container disableGutters maxWidth="lg">
        <Stack
          direction="row"
          spacing={6}
          pb="280px"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="column" pt={54} maxWidth="602px">
            <Typography variant="h1" color="#F7F9FC">
              Welcome to MongolAPI
            </Typography>
            <Typography variant="body1" color="#F7F9FC" pt={12} pb={16}>
              Lorem ipsum dolor sit amet consectetur. Congue quam bibendum
              venenatis consectetur interdum pellentesque amet purus id.
              Senectus nunc risus sed nunc ultricies placerat proin. Ultricies
              luctus vel tortor eu elementum vulputate cursus nunc.
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: '265px',
                height: '75px',
                backgroundColor: '#00C0CC',
              }}
            >
              hello
            </Button>
          </Stack>
          <Stack
            width="100%"
            maxWidth="596px"
            height="566px"
            position={'relative'}
          >
            <Image
              style={{ marginTop: '80px' }}
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
