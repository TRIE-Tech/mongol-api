import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Theme from '@theme';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Theme>
        <Head>
          <title>Welcome to mongol-api-web!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Theme>
    </>
  );
};

export default CustomApp;
