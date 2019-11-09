import React from 'react';
import { IndexState, ReissueState, IStudent } from '../constant';

interface IProps {
  data: IStudent;
  status: IndexState | ReissueState;
  setCurrent: React.Dispatch<React.SetStateAction<IndexState | ReissueState>>;
}

const IndexReady: React.FC<IProps> = (props: IProps) => (
  <div className="indexready">
    <h1>資料確認</h1>
    <span>學生姓名：{props.data.name}</span>
    <span>出生日期：{props.data.birth}</span>
    <span>畢業系所：{props.data.major}</span>
    <span>其他資訊：{props.data.other}</span>
    <span>申請證書：{props.data.apply}</span>
    <div className="indexbutton">
      <button
        onClick={() =>
          props.status === IndexState.READY
            ? props.setCurrent(IndexState.INPUT)
            : props.setCurrent(ReissueState.INPUT)
        }
      >
        重新輸入
      </button>
      <div style={{ width: '10%' }} />
      <button
        onClick={() =>
          props.status === IndexState.READY
            ? props.setCurrent(IndexState.SUCCESS)
            : props.setCurrent(ReissueState.SUCCESS)
        }
      >
        確定送出
      </button>
    </div>
    <style jsx>{`
      .indexready {
        width: 800px;
        height: 580px;
        border-radius: 20px;
        border: solid 6px rgba(112, 112, 112, 0.16);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        position: relative;
        color: #707070;
      }
      .indexbutton {
        display: flex;
        justify-content: center;
        align-items: space-around;
        flex-direction: row;
        position: absolute;
        bottom: 20px;
        width: 80%;
      }
      h1 {
        -webkit-text-stroke: 1px #707070;
        font-size: 48px;
        text-align: center;
        margin: 28px 0 0 0;
      }
      span {
        font-size: 40px;
        text-align: left;
        width: 90%;
        margin: 19px 0px 0px 0px;
      }
      button {
        font-size: 32px;
        color: #ffffff;
        border-radius: 40px;
        background-color: rgba(71, 125, 230, 0.97);
        padding: 5px 40px 5px 40px;
      }
    `}</style>
  </div>
);

export default IndexReady;