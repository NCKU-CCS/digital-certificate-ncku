import React, { useState } from 'react';
import Head from 'next/head';
import Section from '../components/section';
import Nav from '../components/nav';
import Form from '../components/form';
import Ready from '../components/ready';
import Final from '../components/final';
import { ReissueState, IStudent } from '../constant';

export default (() => {
  const [current, setCurrent] = useState<ReissueState>(ReissueState.INPUT);
  const [isEnglish, setEnglish] = useState(false);
  const [userInfo, setUser] = useState<IStudent>(null);

  const changeEnglish = () => setEnglish(!isEnglish);
  const changeCurrent = (update: ReissueState) => setCurrent(update);
  const handleSuccess = (data: IStudent) => {
    setUser(data);
    setCurrent(ReissueState.READY);
  };
  const renderBody = () => {
    if (current === ReissueState.INPUT) {
      return (
        <Form
          isEnglish={isEnglish}
          changeEnglish={changeEnglish}
          onSuccess={handleSuccess}
        />
      );
    } else if (current === ReissueState.READY) {
      return (
        <Ready
          current={current}
          data={userInfo}
          isEnglish={isEnglish}
          changeCurrent={changeCurrent}
        />
      );
    } else {
      return (
        <Final
          data={userInfo}
          current={current}
          changeCurrent={changeCurrent}
        />
      );
    }
  };

  return (
    <main>
      <Head>
        <title>教育部數位證書上傳系統 - 補證</title>
      </Head>

      <Section>
        <Nav />
        {renderBody()}
      </Section>
    </main>
  );
}) as React.FC;
