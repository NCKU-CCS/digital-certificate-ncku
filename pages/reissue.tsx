import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import Nav from '../components/nav';

const Reissue: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Reissue</title>
      </Head>
      <Nav />
      <div
        style={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>網站建置中....</p>
      </div>
    </main>
  );
};

export default Reissue;
