import React, { useState } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Section from '../components/section';
import Form from '../components/form';
import IndexReady from '../components/indexAndIssueReady';
import IndexFinal from '../components/indexAndIssueFinal';
import { ReissueState, IStudent } from '../constant';

const Index: React.FC = () => {
  const [currentState, setCurrent] = useState<ReissueState>(ReissueState.INPUT);
  const [user, setUser] = useState<IStudent>();
  return (
    <main>
      <Head>
        <title>查詢</title>
      </Head>
      <Nav />
      <Section>
        {currentState === ReissueState.INPUT ? (
          <Form status={currentState} dispatch={setCurrent} setUser={setUser} />
        ) : currentState === ReissueState.READY ? (
          <IndexReady
            status={currentState}
            setCurrent={setCurrent}
            data={user}
          />
        ) : (
          <IndexFinal
            status={currentState}
            setCurrent={setCurrent}
            data={user}
          />
        )}
      </Section>
    </main>
  );
};

export default Index;
