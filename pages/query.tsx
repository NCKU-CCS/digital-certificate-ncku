import React, { useState } from 'react';
import Head from 'next/head';
import Section from '../components/section';
import Nav from '../components/nav';
import Form from '../components/form';
import QueryFinal from '../components/queryFinal';
import QueryRename from '../components/queryRename';
import Final from '../components/final';
import { QueryState, IStudent } from '../constant';

export default (() => {
  const [current, setCurrent] = useState<QueryState>(QueryState.INPUT);
  const [isEnglish, setEnglish] = useState(false);
  const [userInfo, setUser] = useState<IStudent>(null);

  const changeEnglish = () => setEnglish(!isEnglish);
  const changeCurrent = (update: QueryState) => setCurrent(update);
  const handleSuccess = (data: IStudent) => {
    setUser(data);
    setCurrent(QueryState.FINAL);
  };
  const renderBody = () => {
    if (current === QueryState.INPUT) {
      return (
        <Form
          isEnglish={isEnglish}
          changeEnglish={changeEnglish}
          onSuccess={handleSuccess}
        />
      );
    } else if (current === QueryState.RENAME) {
      return <QueryRename data={userInfo} changeCurrent={changeCurrent} />;
    } else if (current === QueryState.END) {
      return (
        <Final
          data={userInfo}
          current={current}
          changeCurrent={changeCurrent}
        />
      );
    } else {
      return (
        <QueryFinal
          data={userInfo}
          isEnglish={isEnglish}
          changeCurrent={changeCurrent}
        />
      );
    }
  };

  return (
    <main>
      <Head>
        <title>教育部數位證書上傳系統 - 查詢</title>
      </Head>

      <Section>
        <Nav />
        {renderBody()}
      </Section>
    </main>
  );
}) as React.FC;
