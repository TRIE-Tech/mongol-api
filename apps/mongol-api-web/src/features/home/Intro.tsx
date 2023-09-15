import { Button } from '@components';
import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const Intro = () => {
  return (
    <Box bgcolor="primary.500" width="100vw" minHeight="calc(100vh - 77px)">
      <Container disableGutters sx={{ maxWidth: '1048px' }} maxWidth={false}>
        <Stack minHeight="calc(100vh - 77px)" justifyContent="center">
          <Stack direction="row">
            <Stack direction="column" pt={25} pb={15} width="100%" mr={4}>
              <Typography variant="h2" color="#F7F9FC" pb={8}>
                Welcome to MongolAPI
              </Typography>
              <Typography
                fontWeight="300"
                fontSize="24px"
                lineHeight="29.02px"
                color="#F7F9FC"
                pb={8}
              >
                Lorem ipsum dolor sit amet consectetur. Congue quam bibendum
                venenatis consectetur interdum pellentesque amet purus id.
                Senectus nunc risus sed nunc ultricies placerat proin. Ultricies
                luctus vel tortor eu elementum vulputate cursus
              </Typography>
              <Box width="176px" height="54px">
                <Button>Explore</Button>
              </Box>
            </Stack>
            <Stack
              width="100%"
              maxWidth="460px"
              height="490px"
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
        </Stack>
      </Container>
    </Box>
  );
};
