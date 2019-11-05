import React, { useState } from 'react';
import { IndexState, QueryState } from '../../constant';

interface IProps {
  status: QueryState | IndexState;
  dispatch: React.Dispatch<React.SetStateAction<IndexState | QueryState>>;
}

const Form: React.FC<IProps> = (props: IProps) => {
  const alertMessage = '學生資料錯誤，請重新輸入';
  const [eng, setEng] = useState(false);
  const [alert, setAlert] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // tslint:disable
    console.log(inputText);
    console.log(props.status);
    if (
      props.status === QueryState.INPUT ||
      props.status === QueryState.SUCCESS ||
      props.status === QueryState.FAILURE
    ) {
      // test trigger API
      const testReturn = true;
      const testPayload = false;
      setTimeout(() => {
        if (testReturn) {
          if (testPayload) {
            props.dispatch(QueryState.SUCCESS);
          } else {
            props.dispatch(QueryState.FAILURE);
          }
        } else {
          setAlert(!alert);
        }
      }, 1000);
    } else if (
      props.status === IndexState.INPUT ||
      props.status === IndexState.READY ||
      props.status === IndexState.SUCCESS ||
      props.status === IndexState.FAILURE
    ) {
      // handle data processing
    }
    // tslint:enable
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputText(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div className="selector">
          <a
            className={eng ? 'selected' : 'default'}
            onClick={() => setEng(!eng)}
          >
            中文
          </a>
          <a
            className={!eng ? 'selected' : 'default'}
            onClick={() => setEng(!eng)}
          >
            英文
          </a>
        </div>
        <div className="alert">{alert ? alertMessage : ''}</div>
      </label>

      <label>
        <input onChange={handleChange} type="text" placeholder="學生證號碼" />
        <div style={{ height: '80px', width: '100%' }} />
      </label>

      <label>
        <button type="submit">確認 CONFIRM</button>
        <div>
          <div
            className="circle"
            style={!eng ? { backgroundColor: '#707070' } : {}}
          />
          <div
            className="circle"
            style={eng ? { backgroundColor: '#707070' } : {}}
          />
        </div>
      </label>

      <style jsx>{`
        form {
          width: 100%;
          height: 75%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          padding: 20px 0px 20px 0px;
          border-radius: 0px 0px 20px 20px;
        }
        label {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        input {
          border-top: 0px;
          border-left: 0px;
          border-right: 0px;
          border-bottom: 2px solid rgba(186, 184, 184, 0.66);
          background-color: transparent;
          width: 70%;
          font-size: 25px;
          line-height: 1.2;
          color: #707070;
        }
        input::placeholder {
          font-size: 25px;
          color: rgba(186, 184, 184, 0.66);
        }
        button {
          width: 70%;
          font-size: 23px;
          border-radius: 31px;
          background-color: #4781e6;
          line-height: 1.22;
          letter-spacing: 0.05px;
          text-align: center;
          color: rgba(247, 247, 247, 0.92);
          padding: 8px 0px 8px 0px;
          border: 0px;
        }
        .circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 1px solid #707070;
          display: inline-block;
          margin: 20px 12px 20px 12px;
        }
        .alert {
          color: rgba(236, 35, 35, 0.92);
          font-family: EdwardianScriptITC;
          font-size: 25px;
          height: 36px;
        }
        .selector {
          font-size: 33px;
          -webkit-text-stroke: 1px #676464;
          font-family: SegoeUI;
          color: #676464;
          text-align: center;
          margin-top: 25px;
        }
        .selector > a {
          margin: 0px 15px 0px 15px;
        }
        .selected {
          opacity: 0.35;
        }
        .default {
          opacity: 1;
        }
      `}</style>
    </form>
  );
};

export default Form;
