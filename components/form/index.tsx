import React, { useState } from 'react';
import styled from 'styled-components';
import FormBody from './form';

const FormDiv = styled.div`
  width: 600px;
  height: 600px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;
`;

const FormTitle = styled.div`
  width: 100%;
  height: 25%;
  background-image: url('/static/laptop-from-above.png');
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  > span {
    -webkit-text-stroke: 1px #ffffff;
    font-family: SegoeUI;
    font-size: 45px;
    color: #ffffff;
  }
`;

const FormSection: React.FC = () => {
  return (
    <FormDiv>
      <FormTitle>
        <span>輸入學生資料</span>
      </FormTitle>
      <FormBody />
    </FormDiv>
  );
};

export default FormSection;
