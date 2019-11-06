import React from 'react';
import Form from './form';
import { IndexState, QueryState, ReissueState, IStudent } from '../../constant';

interface IProps {
  status: QueryState | IndexState | ReissueState;
  dispatch: React.Dispatch<
    React.SetStateAction<QueryState | IndexState | ReissueState>
  >;
  user?: IStudent;
  setUser?: React.Dispatch<React.SetStateAction<IStudent>>;
}

const FormSection: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="formdiv">
      <div className="formtitle">
        <span>輸入學生資料</span>
      </div>
      <Form
        status={props.status}
        dispatch={props.dispatch}
        setUser={props.setUser}
      />
      <style jsx>{`
        .formdiv {
          width: 600px;
          height: 600px;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          border-radius: 20px;
        }
        .formtitle {
          width: 100%;
          height: 25%;
          background-image: url('/static/laptop-from-above.png');
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
      `}</style>
    </div>
  );
};

export default FormSection;
