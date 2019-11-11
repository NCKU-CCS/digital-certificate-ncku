import React from 'react';
import Form from './form';
import { IndexState, QueryState, ReissueState, IStudent } from '../../constant';
import BgImage from '../../static/laptop-from-above.png';

interface IProps {
  onSuccess: (user: IStudent | boolean) => void;
}

const FormSection: React.FC<IProps> = ({ onSuccess }: IProps) => {
  return (
    <div className="formdiv">
      <div className="formtitle" style={{ backgroundImage: `url(${BgImage})` }}>
        <span>輸入學生資料</span>
      </div>
      <Form onSuccess={onSuccess} />
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
