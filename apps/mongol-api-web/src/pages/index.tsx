import { Example, Intro, Resources } from '@features';
import { Footer, Header } from '@components';

const Index = () => {
  return (
    <>
      <Header backgroundColor="#FAF8FB" />
      <Intro />
      <Example />
      <Resources />
      <Footer backgroundColor="#FAF8FB" />
    </>
  );
};

export default Index;
