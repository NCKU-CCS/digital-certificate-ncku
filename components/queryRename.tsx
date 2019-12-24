import React, { useState } from 'react';
import Loading from './loading';
import { QueryState, IStudent, IResp } from '../constant';
import { renameApi } from '../utils';

interface IProps {
  data: IStudent;
  changeCurrent: (update: any) => void;
}

export default ((props: IProps) => {
  const [isLoad, setLoad] = useState(false);
  const [newName, setNewName] = useState<string>('');

  const handleNewName = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewName(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoad(true);
    const data: IResp = await renameApi(props.data.student_id, newName);
    if (null !== data && data.applied) {
      props.changeCurrent(QueryState.END);
    } else {
      alert(data.error_msg);
      props.changeCurrent(QueryState.INPUT);
    }
    setLoad(false);
  };

  return (
    <form className="center column" onSubmit={handleSubmit}>
      {isLoad ? (
        <div id="load">
          <Loading />
        </div>
      ) : (
        <React.Fragment>
          <span className="title">欲更改的中英文姓名</span>
          <input
            type="text"
            id="input-chinese"
            placeholder="中文"
            onChange={handleNewName}
          />
          <input
            type="text"
            id="input-english"
            placeholder="英文 - 此欄位暫不開放"
            disabled
          />

          <div className="center row" style={{ marginTop: '46px' }}>
            <button style={{ marginRight: '60px' }} type="submit">
              <span>確認 CONFIRM</span>
            </button>
            <button
              onClick={() => props.changeCurrent(QueryState.INPUT)}
              type="button"
            >
              <span>返回</span>
            </button>
          </div>
        </React.Fragment>
      )}
      <style jsx>{`
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .column {
          flex-direction: column;
        }
        .row {
          flex-direction: row;
        }
        .title {
          font-family: SegoeUI;
          font-size: 40px;
          line-height: 1.2;
          letter-spacing: 0.08px;
          text-align: center;
          color: #676464;
          margin-bottom: 38px;
        }
        input {
          width: 590px;
          height: 73px;
          border-radius: 20px;
          box-shadow: 5px 6px 6px 0 rgba(0, 0, 0, 0.16);
          background-color: #ffffff;
          border: 0px;
          margin: 20px 0 20px 0;
          padding: 0 20px 0 20px;
          font-size: 35px;
        }
        input::placeholder {
          font-family: EdwardianScriptITC;
          font-size: 35px;
          line-height: 1.5;
          text-align: left;
          color: rgba(186, 184, 184, 0.66);
        }
        button {
          width: 240px;
          height: 45px;
          border: 0px;
          border-radius: 31px;
          background-color: #4781e6;
        }
        button > span {
          font-family: SegoeUI;
          font-size: 23px;
          line-height: 1.22;
          letter-spacing: 0.05px;
          text-align: center;
          color: rgba(247, 247, 247, 0.92);
        }
        #load {
          width: 800px;
          height: 600px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </form>
  );
}) as React.FC<IProps>;
