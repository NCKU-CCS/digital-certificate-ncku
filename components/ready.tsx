import React from 'react';
import { IStudent, IResp, IndexState, ReissueState } from '../constant';
import { issueApi, reissueApi } from '../utils';

interface IProps {
  current: IndexState | ReissueState;
  data: IStudent;
  isEnglish: boolean;
  changeCurrent: (update: any) => void;
}

export default ((props: IProps) => {
  const handleClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (props.current === IndexState.READY) {
      const data: IResp = await issueApi(
        props.data.student_id,
        props.isEnglish,
      );
      if (null !== data && data.applied) {
        props.changeCurrent(IndexState.SUCCESS);
      } else {
        alert(null !== data ? data.error_msg : 'Cannot get data');
        props.changeCurrent(IndexState.INPUT);
      }
    } else {
      const data: IResp = await reissueApi(
        props.data.student_id,
        props.isEnglish,
      );
      if (null !== data && data.applied) {
        props.changeCurrent(ReissueState.SUCCESS);
      } else {
        alert(null !== data ? data.error_msg : 'Cannot get data');
        props.changeCurrent(ReissueState.INPUT);
      }
    }
  };

  return (
    <div className="ready">
      <h1>資料確認</h1>
      <span>學生姓名：{props.data.chinese_name}</span>
      <span>出生日期：{props.data.birth_date}</span>
      <span>
        畢業系所：{props.data.graduate_univ + props.data.graduate_dept}
      </span>
      <span>其他資訊：{props.data.minor_d_major}</span>
      <span>
        申請證書：
        {`${props.isEnglish ? '英文' : '中文'}證書 / ${
          props.current === IndexState.READY ? '初辦' : '補證'
        }`}
      </span>
      <div className="buttonlist">
        <button
          onClick={() =>
            props.changeCurrent(
              props.current === IndexState.READY
                ? IndexState.INPUT
                : ReissueState.INPUT,
            )
          }
        >
          重新輸入
        </button>
        <div style={{ width: '10%' }} />
        <button onClick={handleClick}>確定送出</button>
      </div>
      <style jsx>{`
        .ready {
          width: 800px;
          border-radius: 20px;
          border: solid 6px rgba(112, 112, 112, 0.16);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          color: #707070;
        }
        .buttonlist {
          display: flex;
          justify-content: center;
          align-items: space-around;
          flex-direction: row;
          margin: 20px 0 20px 0;
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
          border: 0px;
          border-radius: 40px;
          background-color: rgba(71, 125, 230, 0.97);
          padding: 5px 40px 5px 40px;
        }
      `}</style>
    </div>
  );
}) as React.FC<IProps>;
