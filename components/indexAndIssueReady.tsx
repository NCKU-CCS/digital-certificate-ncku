import React from 'react';
import { IndexState, ReissueState, IStudent } from '../constant';
import { issueApi, reissueApi } from '../utils';

interface IProps {
  data: IStudent;
  status: IndexState | ReissueState;
  setCurrent: React.Dispatch<React.SetStateAction<IndexState | ReissueState>>;
  english: boolean;
}

/**
 * @function IndexReady()
 * @param {IProps} props {data, status, setCurrent, english}
 * @brief component of "ready" state for '/index' and '/reissue'
 */
const IndexReady: React.FC<IProps> = (props: IProps) => {
  const handleOnClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (props.status === IndexState.READY) {
      try {
        const d = await issueApi(props.data.student_id, props.english);
        if (d.applied) {
          props.setCurrent(IndexState.SUCCESS);
        } else {
          alert('已發證！如需重新發放，請點選「補證頁面」進行補證');
          props.setCurrent(IndexState.INPUT);
        }
      } catch (err) {
        props.setCurrent(IndexState.INPUT);
      }
    } else {
      try {
        const d = await reissueApi(props.data.student_id, props.english);
        if (d.applied) {
          props.setCurrent(ReissueState.SUCCESS);
        } else {
          alert('尚未發證，不能補證');
          props.setCurrent(ReissueState.INPUT);
        }
      } catch (err) {
        alert(err);
        props.setCurrent(ReissueState.INPUT);
      }
    }
  };

  return (
    <div className="indexready">
      <h1>資料確認</h1>
      <span>學生姓名：{props.data.chinese_name}</span>
      <span>出生日期：{props.data.birth_date}</span>
      <span>
        畢業系所：{props.data.graduate_univ + props.data.graduate_dept}
      </span>
      <span>其他資訊：{props.data.minor_d_major}</span>
      <span>
        申請證書：
        {`${props.english ? '英文' : '中文'}證書 / ${
          props.status === IndexState.READY ? '初辦' : '補證'
        }`}
      </span>
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
        <button onClick={handleOnClick}>確定送出</button>
      </div>
      <style jsx>{`
        .indexready {
          width: 800px;
          border-radius: 20px;
          border: solid 6px rgba(112, 112, 112, 0.16);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          color: #707070;
        }
        .indexbutton {
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
          border-radius: 40px;
          background-color: rgba(71, 125, 230, 0.97);
          padding: 5px 40px 5px 40px;
        }
      `}</style>
    </div>
  );
};

export default IndexReady;
