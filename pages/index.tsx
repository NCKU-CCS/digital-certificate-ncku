import React, { useState } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Section from '../components/section';
import Form from '../components/form';
import { IndexState } from '../constant';

const Index: React.FC = () => {
  const [currentState, setCurrent] = useState<IndexState>(IndexState.INPUT);
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <Section>
        <Form status={currentState} dispatch={setCurrent} />
      </Section>
    </main>
  );
};

export default Index;
