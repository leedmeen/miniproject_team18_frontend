import React from 'react';
import styled from 'styled-components';
import Grid from '../element/Grid';
import Logo from '../gaemoim.jpg';
import { history } from '../redux/configureStore';

const Header = (props) => {
  
  return (
    <React.Fragment>
      <Grid is_right>
        <Menu>알림</Menu>
        <Menu onClick={() => { history.push('/login')}}>로그인</Menu>
        <Menu>회원가입</Menu>
      </Grid>
      <LogoBox>
        <Image style={{height: '10vh', width: 'auto'}} src={Logo} alt='로고' onClick={() => history.push('/')}></Image>
      </LogoBox>
    </React.Fragment>
  )
};

const Menu = styled.span`
  margin: 1vw;
  font-size: 1.4vh;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #E8344E;
  }
`;

const LogoBox = styled.div`
  padding-bottom: 5vh;
  text-align: center;
`;

const Image = styled.img`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Header;