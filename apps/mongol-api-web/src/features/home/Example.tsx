import { Button } from '@components';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { CodeSnippet } from 'src/components/code-snippet';
import { ClothesDemoData } from '../../../../../libs/mongol-api-data/src/lib/demo';

export const Example = () => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const handleTryButton = () => {
    setOpen(!open);
  };
  return (
    <Box bgcolor="common.white" py="90px">
      <Container disableGutters sx={{ maxWidth: '1200px' }} maxWidth={false}>
        <Stack
          direction="column"
          pt="100px"
          pb={open ? '50px' : '100px'}
          minHeight="100%"
          alignItems="center"
        >
          <Typography color={palette.blue[200]} variant="h2" pb={8}>
            Let&apos;s try it out!
          </Typography>
          <Typography color={palette.primary[500]} variant="subtitle1" pb={9}>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </Typography>
          <Stack minWidth="100%" spacing={6} data-cy="Home-Example-Container">
            <CodeSnippet value={ClothesDemoData.rest.query} maxWidth="1200px" />
            <Stack alignItems="flex-start" style={{ width: '180px' }}>
              <Button
                onClick={handleTryButton}
                data-cy="Home-Example-Try-Button"
                sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
              >
                {open ? 'Hooray 👏' : 'Try Here!'}
              </Button>
            </Stack>
            {open ? (
              <CodeSnippet
                value={ClothesDemoData.rest.result}
                maxWidth="1200px"
                testId="Example-Code-Snippet"
              />
            ) : (
              <CodeSnippet
                testId="Loading-Code-Snippet"
                value={'Waiting to fetch!!!'}
                maxWidth="1200px"
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
