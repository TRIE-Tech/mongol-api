import { Example, Intro, Resources } from '@features';
import { Footer, Header } from '@components';

const Index = () => {
  return (
    <>
      <Header colorMode="dark" />
      <Intro />
      <Example />
      <Resources />
      <Footer colorMode="dark" />
    </>
  );
};

export default Index;
