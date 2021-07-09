import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import Grid from '../element/Grid';
import Logo from '../gaemoim.jpg';

const Header = (props) => {

  return (
    <React.Fragment>
      <Grid is_right>
        <Button width='70px' height='4vh' text='알림'/>
        <Button width='70px' height='4vh' text='로그인'/>
        <Button width='70px' height='4vh' text='회원가입'/>
      </Grid>
      <LogoBox>
        <img style={{height: '25vh', width: 'auto'}} src={Logo} alt='로고'></img>
      </LogoBox>
    </React.Fragment>
  )
};

const LogoBox = styled.div`
  border-bottom: 7px dashed #63584f;
  text-align: center;
`;

export default Header;