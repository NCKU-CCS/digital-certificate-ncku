import React from 'react';

interface IProps {
  page: string;
  number: string;
}

export default ((props: IProps) => (
  <img
    src={`http://www.cns11643.gov.tw/cgi-bin/ttf2png?page=${props.page}&number=${props.number}&face=kai&fontsize=40`}
    style={{ verticalAlign: 'middle' }}
  />
)) as React.FC<IProps>;
