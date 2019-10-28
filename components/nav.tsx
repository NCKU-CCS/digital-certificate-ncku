import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 99px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Navimg = styled.img`
  width: 78px;
  height: 78px;
  margin: 0 1.5rem 0 1.5rem;
`;
const Navtitle = styled.span`
  font-family: EdwardianScriptITC;
  font-size: 42px;
  text-align: center;
  color: #676464;
`;
const Navlink = styled.a`
  font-family: EdwardianScriptITC;
  font-size: 47px;
  padding: 0px 1rem 0px 1rem;
  margin: 0px 1rem 0px 1rem;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const Resizable = styled.div`
  margin: 0 auto;
`;

const links = [
  { name: '初辦', rel: '/url1' },
  { name: '補證', rel: '/url2' },
  { name: '查詢', rel: '/url3' },
];

const Nav: React.FC = () => {
  const [path, setPath] = useState('/url3');
  return (
    <Navbar>
      <Navimg src="/static/edu_icon.png" />
      <Navtitle>教育部數位證書上傳系統</Navtitle>
      <Resizable />
      {links.map((link, index) => (
        <Navlink
          key={index}
          onClick={() => setPath(link.rel)}
          style={
            path === link.rel
              ? {
                  color: '#6a63c8',
                  borderBottom: '6px solid #6a63c8',
                  borderTop: '6px solid transparent',
                }
              : { color: '#676464' }
          }
        >
          {link.name}
        </Navlink>
      ))}
    </Navbar>
  );
};

export default Nav;
