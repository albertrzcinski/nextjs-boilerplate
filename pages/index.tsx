import Head from 'next/head';
import Wrapper from '../components/atoms/Wrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>
      <Wrapper>
        <p>Next.js + TS + styled-components + airbnb-typescript + prettier</p>
      </Wrapper>
    </>
  );
}
