import { Button } from '@components';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { CodeSnippet } from 'src/components/code-snippet';
import { ClothesDocsData } from '../../../../../libs/mongol-api-data/src/lib/demo';

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
          <CodeSnippet value={ClothesDocsData.rest.query} />

          <Stack alignItems="flex-start" style={{ width: '228px' }}>
            <Button onClick={handleTryButton} size="small">
              Try Here!
            </Button>
          </Stack>

          {open ? (
            <CodeSnippet value={ClothesDocsData.rest.result} />
          ) : (
            <CodeSnippet value={'Waiting to fetch!!!'} />
          )}
        </Stack>
      </Container>
    </Box>
  );
};
