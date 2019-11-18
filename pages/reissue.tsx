import React, { useState } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Section from '../components/section';
import Form from '../components/form';
import IssueReady from '../components/indexAndIssueReady';
import IssueFinal from '../components/indexAndIssueFinal';
import { ReissueState, IStudent } from '../constant';

const Index: React.FC = () => {
  const [currentState, setCurrent] = useState<ReissueState>(ReissueState.INPUT);
  const [user, setUser] = useState<IStudent>();
  const [eng, setEng] = useState(false);

  return (
    <main>
      <Head>
        <title>查詢</title>
      </Head>
      <Nav />
      <Section>
        {currentState === ReissueState.INPUT ? (
          <Form
            onSuccess={student => {
              if (student && typeof student !== 'boolean') {
                setUser(student);
                setCurrent(ReissueState.READY);
              } else {
                setCurrent(ReissueState.FAILURE);
              }
            }}
            english={eng}
            setEnglish={() => setEng(!eng)}
          />
        ) : currentState === ReissueState.READY ? (
          <IssueReady
            status={currentState}
            setCurrent={setCurrent}
            data={user}
            english={eng}
          />
        ) : (
          <IssueFinal
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
