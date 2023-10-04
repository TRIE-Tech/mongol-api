import { Footer, Header } from '@components';
import { DocsTabs } from '@features';
import { TabContext, TabPanel } from '@mui/lab';
import { Container, Stack } from '@mui/material';
import { useState } from 'react';
import { TABS_DATA } from 'src/features/docs/shared';

const Index = () => {
  const [tabValue, setTabValue] = useState('home');

  return (
    <>
      <Header backgroundColor="white" />
      <Container disableGutters maxWidth="lg">
        <TabContext value={tabValue}>
          <Stack direction="row">
            <Stack pt={8}>
              <DocsTabs value={tabValue} setValue={setTabValue} />
            </Stack>
            <Stack>
              {TABS_DATA.map(({ value, panel }) => {
                return (
                  <TabPanel key={value} value={value}>
                    {panel}
                  </TabPanel>
                );
              })}
            </Stack>
          </Stack>
        </TabContext>
      </Container>
      <Footer backgroundColor="white" />
    </>
  );
};

export default Index;
