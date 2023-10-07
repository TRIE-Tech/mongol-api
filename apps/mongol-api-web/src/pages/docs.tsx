import { Footer, Header } from '@components';
import { DocsTabs } from '@features';
import { TabContext, TabPanel } from '@mui/lab';
import { Container, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { TABS_DATA } from 'src/features/docs/shared';

const Index = () => {
  const [tabValue, setTabValue] = useState('home');

  return (
    <Stack>
      <Stack
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Header backgroundColor="white" />
      </Stack>
      <Container disableGutters sx={{ maxWidth: '1200px' }} maxWidth={false}>
        <TabContext value={tabValue}>
          <Stack direction="row" pt={8}>
            <Grid container>
              <Grid item md={3} xs={3}>
                <Stack
                  sx={{
                    position: 'sticky',
                    top: 92,
                    left: 0,
                  }}
                >
                  <DocsTabs value={tabValue} setValue={setTabValue} />
                </Stack>
              </Grid>
              <Grid item md={9} xs={9}>
                <Stack>
                  {TABS_DATA.map(({ value, panel }) => {
                    return (
                      <TabPanel key={value} value={value}>
                        {panel}
                      </TabPanel>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </TabContext>
      </Container>
      <Footer backgroundColor="white" />
    </Stack>
  );
};

export default Index;
