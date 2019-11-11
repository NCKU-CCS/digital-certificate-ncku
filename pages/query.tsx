import React, { useState } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Section from '../components/section';
import Form from '../components/form';
import QueryFinal from '../components/queryFinal';
import { QueryState } from '../constant';

const Query: React.FC = () => {
  // enum type in global
  const [currentState, setCurrent] = useState<QueryState>(QueryState.INPUT);
  return (
    <main>
      <Head>
        <title>補證</title>
      </Head>

      <Nav />

      <Section>
        {currentState === QueryState.INPUT ? (
          <Form
            onSuccess={applied => {
              if (applied) {
                setCurrent(QueryState.SUCCESS);
              } else {
                setCurrent(QueryState.FAILURE);
              }
            }}
          />
        ) : (
          <QueryFinal
            isSuccess={currentState === QueryState.SUCCESS}
            dispatch={setCurrent}
          />
        )}
      </Section>
    </main>
  );
};

export default Query;
