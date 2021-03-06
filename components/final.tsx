import React from 'react';
import { IndexState, ReissueState, QueryState, IStudent } from '../constant';
import SuccessImage from '../static/success.png';

interface IProps {
  data: IStudent;
  current: IndexState | ReissueState | QueryState;
  changeCurrent: (update: IndexState | ReissueState | QueryState) => void;
}

export default ((props: IProps) => (
  <div className="indexfinal">
    <img src={SuccessImage} />
    <h1>{props.current === QueryState.END ? '改名成功' : '上傳成功'}</h1>
    <div style={{ height: '10%' }} />
    <span>
      {props.current === QueryState.END ? '改名後' : ''}
      PDF 已寄送至 <br />
      {props.data.email}
    </span>
    <a
      onClick={() =>
        props.current === IndexState.SUCCESS
          ? props.changeCurrent(IndexState.INPUT)
          : props.current === ReissueState.SUCCESS
          ? props.changeCurrent(ReissueState.INPUT)
          : props.changeCurrent(QueryState.INPUT)
      }
    >
      退出
    </a>
    <style jsx>{`
      .indexfinal {
        width: 553px;
        height: 628px;
        box-shadow: 3px 3px 10px 0 rgba(51, 188, 60, 0.29);
        border: solid 6px #33bc3c;
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
        color: #33bc3c;
        margin: 26px 0 26px 0;
      }
      span {
        font-family: Calibri;
        font-size: 40px;
        color: #707070;
        text-align: center;
      }
      a {
        font-family: SegoeUI;
        font-size: 32px;
        color: #e72525;
        text-align: center;
        border-bottom: 2px solid #e72525;
        position: absolute;
        bottom: 37px;
      }
    `}</style>
  </div>
)) as React.FC<IProps>;
