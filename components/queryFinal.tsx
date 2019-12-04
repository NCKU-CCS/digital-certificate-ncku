import React from 'react';
import { QueryState } from '../constant';
import SuccessImage from '../static/success.png';
import FailureImage from '../static/failure.png';

interface IProps {
  isSuccess: boolean;
  onUpdate: (update: QueryState) => void;
}

/**
 * @function queryFinal()
 * @param {IProps} props {isSuccess, onUpdate}
 * @brief component of "final" state for '/query' page
 */
const queryFinal: React.FC<IProps> = (props: IProps) => (
  <div>
    <img src={props.isSuccess ? SuccessImage : FailureImage} />
    <h1>{props.isSuccess ? '已申請' : '未申請'}</h1>
    <a
      onClick={() => props.onUpdate(QueryState.INPUT)}
      style={props.isSuccess ? { left: '78px' } : {}}
    >
      返回
    </a>
    {props.isSuccess ? (
      <a
        onClick={() => props.onUpdate(QueryState.RENAME)}
        style={{ right: '71px' }}
      >
        修改姓名
      </a>
    ) : (
      <></>
    )}
    <style jsx>{`
      div {
        width: 455px;
        height: 510px;
        box-shadow: 3px 3px 10px 0
          ${props.isSuccess
            ? 'rgba(51, 188, 60, 0.29)'
            : 'rgba(221, 36, 36, 0.45)'};
        border: solid 6px ${props.isSuccess ? '#33bc3c' : '#dd2424'};
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
        color: ${props.isSuccess ? '#33bc3c' : '#dd2424'};
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

export default queryFinal;
