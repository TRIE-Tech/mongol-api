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
    <Box bgcolor="common.white" width="100%">
      <Container disableGutters sx={{ maxWidth: '1048px' }} maxWidth={false}>
        <Stack
          direction="column"
          pt="100px"
          pb={open ? '50px' : '100px'}
          minHeight="100%"
          alignItems="center"
          maxWidth="1048px"
        >
          <Typography color={palette.primary[500]} variant="h2" pb={8}>
            Wanna Try MongolAPI?
          </Typography>
          <Typography color={palette.primary[500]} variant="subtitle1" pb={9}>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </Typography>
          <Stack minWidth="100%" spacing={6}>
            <CodeSnippet value={ClothesDocsData.rest.query} maxWidth="1048px" />
            <Stack alignItems="flex-start" style={{ width: '228px' }}>
              <Button onClick={handleTryButton}>
                {open ? 'You Got It!' : 'Try Here!'}
              </Button>
            </Stack>
            {open ? (
              <CodeSnippet
                value={ClothesDocsData.rest.result}
                maxWidth="1048px"
              />
            ) : (
              <CodeSnippet value={'Waiting to fetch!!!'} maxWidth="1048px" />
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
