import React from 'react';
import { Link,  } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.svg'


const Logo = styled.img`
  height: 50px;
  margin-left: 80px;
  margin-top: 19px;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: #FFFFFF;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


const Button = styled.button`
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  gap: 10px;
  cursor: pointer;
  width: 163px;
  height: 53px;
  left: 1197px;
  top: 13px;
  margin-right: 80px;
  background: #D3EAFF;

  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;

  &:hover {
    background-color: #0069d9;
  }
`;

function Header() {
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={logo} alt="Мій логотип" />
      </NavLink>
      <NavLinks>
          <NavItem>
            <NavLink to="/about">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services">TOURS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/favorites">HELP</NavLink>
          </NavItem>
      </NavLinks>
      <Button>SIGN IN</Button>
    </Nav>
  );
}

export default Header;
