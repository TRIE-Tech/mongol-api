import { Example, Intro, Resources } from '@features';
import { Footer, Header } from '@components';
import { Stack } from '@mui/material';

const Index = () => {
  return (
    <Stack minWidth={'1400px'}>
      <Header backgroundColor="#FAF8FB" />
      <Intro />
      <Example />
      <Resources />
      <Footer backgroundColor="#FAF8FB" />
    </Stack>
  );
};

export default Index;
