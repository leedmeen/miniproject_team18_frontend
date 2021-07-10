import React from 'react';
import Text from '../element/Text';
import Button from '../element/Button';
import styled from 'styled-components';
import spartalt from '../sparta-lt.png';

const CommentList = (props) => {

  return (
    <React.Fragment>
      <Box>
          <Div><Text color='#E8344E' bold>르탄이 <img src={spartalt} style={{width: '2vw'}}/></Text></Div>
          <Text margin='0 1vw 0 0'>ㅁㅁㅁ라니, 정말 흥미로운 주제군요!</Text>
          <Text margin='0 1vw 0 0'>2021-07-10 15:25</Text>
          <Button width='60px' height='3vh' backgroundColor='#E8344E' color='white' border='none' borderTLRadius='1vh' borderBLRadius='1vh' fontWeight='bold' text='수정'></Button>
            <Button width='60px' height='3vh' color='white' border='none' borderTRRadius='1vh' borderBRRadius='1vh' fontWeight='bold' backgroundColor='#E8344E' margin='0 0 0 0.2vw' text='삭제'></Button>
      </Box>
    </React.Fragment>
  )
};

const Div = styled.span`
  padding: 1vh 0 1vh;
  margin-right: 1vw;
  
`;

const Box = styled.div`
  display: block;
  align-items: center;
  text-align: left;
  margin: 3vh 0 3vh 5vw;
`;

export default CommentList;