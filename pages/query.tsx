import React, { useState } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Section from '../components/section';
import Form from '../components/form';
import QueryFinal from '../components/queryFinal';
import QueryRename from '../components/queryRename';
import { QueryState } from '../constant';

const Query: React.FC = () => {
  // enum type in global
  const [currentState, setCurrent] = useState<QueryState>(QueryState.INPUT);
  const [eng, setEng] = useState(false);
  const handleUpdate = (update: QueryState) => setCurrent(update);
  const handleLanguage = () => setEng(!eng);

  const renderBody = () => {
    if (currentState === QueryState.INPUT) {
      return (
        <Form
          onSuccess={applied => {
            if (applied) {
              setCurrent(QueryState.SUCCESS);
            } else {
              setCurrent(QueryState.FAILURE);
            }
          }}
          english={eng}
          setEnglish={handleLanguage}
        />
      );
    } else if (currentState === QueryState.RENAME) {
      return <QueryRename onUpdate={handleUpdate} />;
    } else {
      return (
        <QueryFinal
          isSuccess={currentState === QueryState.SUCCESS}
          onUpdate={handleUpdate}
        />
      );
    }
  };
  return (
    <main>
      <Head>
        <title>教育部數位證書上傳系統 - 查詢</title>
      </Head>

      <Nav />

      <Section>{renderBody()}</Section>
    </main>
  );
};

export default Query;
