import React, {useEffect} from 'react';
import styled from 'styled-components';
import Grid from '../element/Grid';
import Logo from '../gaemoim.jpg';
import { history } from '../redux/configureStore';
import {getCookie, deleteCookie} from '../share/Cookie';

const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);

  useEffect(() => {
    let cookie = getCookie('session');
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const logout = () => {
    let cookie = getCookie('session');
    if (!cookie) {
      setIsLogin(false);
      history.replace('/login');
      return;
    }
    deleteCookie('session');
    window.location.replace('/');
  }
  
  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_right>
          <Menu onClick={() => logout()}>로그아웃</Menu>
        </Grid>
        <LogoBox>
          <Image style={{height: '10vh', width: 'auto'}} src={Logo} alt='로고' onClick={() => history.push('/')}></Image>
        </LogoBox>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Grid is_right>
        <Menu onClick={() => history.push('/login')}>로그인</Menu>
        <Menu onClick={() => history.push('/signup')}>회원가입</Menu>
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