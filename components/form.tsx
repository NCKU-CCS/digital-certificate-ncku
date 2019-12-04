import React, { useState } from 'react';
import BgImage from '../static/laptop-from-above.png';
import { IStudent } from '../constant';
import { gradinfoApi } from '../utils';

interface IProps {
  isEnglish: boolean;
  changeEnglish: () => void;
  onSuccess: (data: IStudent) => void;
}

export default ((props: IProps) => {
  const alertMessage = '學生資料錯誤，請重新輸入';
  const [isAlert, setAlert] = useState(false);
  const [userInput, setInput] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = await gradinfoApi(userInput);
    if (data) {
      props.onSuccess(data);
    } else {
      setAlert(true);
    }
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.currentTarget.value);
  };

  return (
    <div className="formContain">
      <div className="formTitle" style={{ backgroundImage: `url(${BgImage})` }}>
        <span>輸入學生資料</span>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          <div className="selector">
            <a
              className={props.isEnglish ? 'selected' : 'default'}
              onClick={() => props.changeEnglish()}
            >
              中文
            </a>
            <a
              className={!props.isEnglish ? 'selected' : 'default'}
              onClick={() => props.changeEnglish()}
            >
              英文
            </a>
          </div>
          <div className="alert">{isAlert ? alertMessage : ''}</div>
        </label>

        <label>
          <input type="text" placeholder="學生證號碼" onChange={handleChange} />
          <div style={{ height: '80px', width: '100%' }} />
        </label>

        <label>
          <button type="submit">確認 CONFIRM</button>
        </label>

        <div>
          <div
            className="circle"
            style={!props.isEnglish ? { backgroundColor: '#707070' } : {}}
          />
          <div
            className="circle"
            style={props.isEnglish ? { backgroundColor: '#707070' } : {}}
          />
        </div>
      </form>

      <style jsx>{`
        .formContain {
          width: 600px;
          height: 600px;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          border-radius: 20px;
        }
        .formTitle {
          width: 100%;
          height: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px 20px 0px 0px;
        }
        span {
          -webkit-text-stroke: 1px #ffffff;
          font-family: SegoeUI;
          font-size: 45px;
          color: #ffffff;
        }
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
    </div>
  );
}) as React.FC<IProps>;
