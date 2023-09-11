import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

export const Example = () => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const handleTryButton = () => {
    setOpen(!open);
  };
  return (
    <Box bgcolor="common.white" width="100vw" minHeight="100%">
      <Container disableGutters maxWidth="lg">
        <Stack
          pt={39}
          pb={14}
          spacing={9}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography color={palette.primary[500]} variant="h1">
            Wanna Try MongolAPI?
          </Typography>
          <Typography color={palette.primary[500]} variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </Typography>
        </Stack>
        <Stack spacing={6} pt={14} pb={open ? 26 : 39}>
          <Box
            width="100%"
            height="191px"
            borderRadius="20px"
            bgcolor={palette.primary[500]}
          ></Box>
          <Stack alignItems="flex-start">
            <Button
              variant="contained"
              onClick={handleTryButton}
              sx={{
                width: '228px',
                height: '60px',
                backgroundColor: '#00C0CC',
              }}
            >
              Try Here!
            </Button>
          </Stack>
          <Box
            width="100%"
            height={open ? '606px' : '188px'}
            borderRadius="20px"
            bgcolor={palette.primary[500]}
          ></Box>
        </Stack>
      </Container>
    </Box>
  );
};
