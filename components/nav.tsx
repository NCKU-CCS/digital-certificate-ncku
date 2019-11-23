import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import EduIcon from '../static/edu_icon.png';
import { getRelativePath } from '../utils/main';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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
  @media (max-width: 1200px) {
    display: none;
  }
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
  @media (max-width: 1200px) {
    margin: 0px 0.5rem 0px 0.5rem;
    padding: 0px 0.5rem 0px 0.5rem;
  }
`;
const Resizable = styled.div`
  margin: 0 auto;
`;

const links = [
  { name: '初辦', rel: '/' },
  { name: '補證', rel: '/reissue' },
  { name: '查詢', rel: '/query' },
];

/**
 * @function Nav()
 * @param props null
 * @brief navbar component for every page
 */
const Nav: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <Navbar>
      <Navimg src={EduIcon} />
      <Navtitle>教育部數位證書上傳系統</Navtitle>
      <Resizable />
      {links.map((link, index) => (
        <Link key={index} href={link.rel} as={getRelativePath(link.rel)}>
          <Navlink
            style={
              pathname === link.rel
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
        </Link>
      ))}
    </Navbar>
  );
};

export default Nav;
