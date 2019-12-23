import React from 'react';

const Loading: React.FC = () => {
  return (
    <React.Fragment>
      <div className="loader">
        <div className="circle inner" />
        <div className="circle outer" />
      </div>
      <h1 className="text">LOADING</h1>
      <style jsx>{`
        .loader {
          position: relative;
          width: 100px;
          height: 100px;
        }
        .circle {
          position: absolute;
          top: 0;
          left: 0;
          border: 6px solid transparent;
          transform: rotate(135deg);
          width: 100px;
          height: 100px;
          box-sizing: border-box;
          border-radius: 50%;
        }
        .inner {
          border-top: 6px solid #a7bbd2;
          border-right: 6px solid #a7bbd2;
          animation: spinRight 1s linear infinite;
          z-index: 998;
        }
        .outer {
          border-top: 6px solid #192a87;
          border-right: 6px solid #192a87;
          animation: spinLeft 1s linear infinite;
          z-index: 999;
        }
        @keyframes spinRight {
          0% {
            transform: rotate(135deg);
          }
          75% {
            transform: rotate(495deg);
          }
          100% {
            transform: rotate(495deg);
          }
        }
        @keyframes spinLeft {
          0% {
            transform: rotate(135deg);
          }
          75% {
            transform: rotate(-225deg);
          }
          100% {
            transform: rotate(-225deg);
          }
        }
        .text {
          -webkit-text-stroke: 0.4px #4781e6;
          font-family: CenturyGothic;
          font-size: 33px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.21;
          letter-spacing: normal;
          text-align: center;
          color: #4781e6;
          width: 200px;
        }
        .text::after {
          content: '';
          animation: textAdd 1.5s linear infinite;
        }
        @keyframes textAdd {
          0% {
            content: '.';
          }
          33% {
            content: '..';
          }
          66% {
            content: '...';
          }
          100% {
            content: '.';
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Loading;
