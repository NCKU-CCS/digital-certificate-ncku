import React from 'react';

interface IProp {
  isEng: boolean;
  langDispatch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Selector: React.FC<IProp> = (props: IProp) => {
  return (
    <div className="selector">
      <a
        className={props.isEng ? 'selected' : 'default'}
        onClick={() => props.langDispatch(!props.isEng)}
      >
        中文
      </a>
      <a
        className={!props.isEng ? 'selected' : 'default'}
        onClick={() => props.langDispatch(!props.isEng)}
      >
        英文
      </a>
      <style jsx>{`
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
};

export default Selector;
