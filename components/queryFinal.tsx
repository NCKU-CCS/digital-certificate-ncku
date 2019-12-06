import React, { useState, useEffect } from 'react';
import { QueryState, IStudent, IResp } from '../constant';
import SuccessImage from '../static/success.png';
import FailureImage from '../static/failure.png';
import { queryApi } from '../utils';

interface IProps {
  data: IStudent;
  isEnglish: boolean;
  changeCurrent: (update: QueryState) => void;
}

export default ((props: IProps) => {
  const [isSuccess, setSuccess] = useState<boolean>(null);

  useEffect(() => {
    (async () => {
      const data: IResp = await queryApi(
        props.data.student_id,
        props.isEnglish,
      );
      setSuccess(data.applied);
    })();
  }, []);

  return (
    <div style={{ display: `${isSuccess === true ? 'flex' : 'none'}` }}>
      <img src={isSuccess ? SuccessImage : FailureImage} />
      <h1>{isSuccess ? '已申請' : '未申請'}</h1>
      <a
        onClick={() => props.changeCurrent(QueryState.INPUT)}
        style={{ left: '78px' }}
      >
        返回
      </a>
      <a
        onClick={() => props.changeCurrent(QueryState.RENAME)}
        style={{ right: '71px' }}
      >
        修改姓名
      </a>
      <style jsx>{`
        div {
          width: 455px;
          height: 510px;
          box-shadow: 3px 3px 10px 0
            ${isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)'};
          border: solid 6px ${isSuccess ? '#33bc3c' : '#dd2424'};
          border-radius: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
        }
        h1 {
          -webkit-text-stroke: 0.4px #33bc3c;
          font-family: EdwardianScriptITC;
          font-size: 45px;
          color: ${isSuccess ? '#33bc3c' : '#dd2424'};
        }
        a {
          font-family: EdwardianScriptITC;
          font-size: 35px;
          color: #676464;
          border-bottom: 2px solid #676464;
          position: absolute;
          bottom: 36px;
        }
      `}</style>
    </div>
  );
}) as React.FC<IProps>;
