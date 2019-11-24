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
  const [eng, setEng] = useState(false);

  return (
    <main>
      <Head>
        <title>教育部數位證書上傳系統 - 查詢</title>
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
            english={eng}
            setEnglish={() => setEng(!eng)}
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
