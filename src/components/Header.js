import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import Logo from "../gaemoim.jpg";
import Grid from "../element/Grid"

const Header = (props) => {

  return (
    <React.Fragment>
     <Grid>
      <Nav>
        <Button text='알림'/>
        <Button text='로그인'/>
        <Button text='회원가입'/>
      </Nav>
      </Grid>
      <LogoBox>
        <img src={Logo} alt='로고'></img>
      </LogoBox>
    </React.Fragment>
  )
};

const Nav = styled.div`
  float: right;
`;

const LogoBox = styled.div`
  border-bottom: 7px dashed #63584f;
  text-align: center;
`;

export default Header;