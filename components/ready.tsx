import React, { useState } from 'react';
import Loading from './loading';
import { IStudent, IResp, IndexState, ReissueState } from '../constant';
import { issueApi, reissueApi } from '../utils';

interface IProps {
  current: IndexState | ReissueState;
  data: IStudent;
  isEnglish: boolean;
  changeCurrent: (update: any) => void;
}

export default ((props: IProps) => {
  const [isLoad, setLoad] = useState(false);

  const handleClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (props.current === IndexState.READY) {
      setLoad(true);
      const data: IResp = await issueApi(
        props.data.student_id,
        props.isEnglish,
      );
      setLoad(false);
      if (null !== data && data.applied) {
        props.changeCurrent(IndexState.SUCCESS);
      } else {
        alert(null !== data ? data.error_msg : 'Cannot get data');
        props.changeCurrent(IndexState.INPUT);
      }
    } else {
      setLoad(true);
      const data: IResp = await reissueApi(
        props.data.student_id,
        props.isEnglish,
      );
      setLoad(false);
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
      {isLoad ? (
        <div id="load">
          <Loading />
        </div>
      ) : (
        <React.Fragment>
          <h1>資料確認</h1>
          <span>學生姓名：{props.data.chinese_name}</span>
          <span>出生日期：{props.data.birth_date}</span>
          <span>
            畢業系所：{props.data.graduate_univ + props.data.graduate_dept}
          </span>
          <span>其他資訊：</span>
          {props.data.minor_d_major.map((item, id) => (
            <span key={id} style={{ margin: '0' }}>
              {'　'}
              {item}
            </span>
          ))}
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
        </React.Fragment>
      )}
      <style jsx>{`
        .ready {
          width: 800px;
          ${isLoad ? 'height: 600px;' : ''}
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
        #load {
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
    </div>
  );
}) as React.FC<IProps>;
