import React from 'react';
import Grid from '../element/Grid';
import Text from '../element/Text';
import Button from '../element/Button';
import Input from '../element/Input';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const Post = (props) => {

  return (
    <React.Fragment>
      <Grid is_center padding='5vh 3vw 3vh 3vw'>
          <Text bold size='4vh'>제목</Text>
        </Grid>
        <Div>
            <Text color='white' size='1.8vh' bold>모집중</Text>
            </Div>
            <Text bold size='2vh' margin='0 0 0 10px'>1/4명</Text>
          <span style={{float: 'right', fontSize: '1.7vh', fontWeight: 'bold'}}>작성자: 익명</span>
          <Grid is_right>
            <span style={{fontSize: '1.7vh', fontWeight: 'bold'}}>작성시각: 2021-07-10 01:33</span>
          </Grid>
          <Grid is_right margin_top='1vh'>
            <Button width='60px' height='3vh' backgroundColor='#E8344E' color='white' border='none' borderTLRadius='1vh' borderBLRadius='1vh' fontWeight='bold' text='수정'></Button>
            <Button width='60px' height='3vh' color='white' border='none' borderTRRadius='1vh' borderBRRadius='1vh' fontWeight='bold' backgroundColor='#E8344E' margin='0 0 0 0.2vw' text='삭제'></Button>
          </Grid>
          <Paper variant="outlined" style={{margin: '3vh 0 3vh 0', borderRadius: '1vw', padding: '1vh'}}><Text size='2vh'>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</Text></Paper>
        <Text size='1.8vh' color='#E8344E' bold>댓글 1개</Text>
        <Grid is_center margin_top='3vh'>
          <Input type='text' placeholder='댓글을 입력해 주세요' width='60vw' height='3vh' fontSize='1.5vh' border='1px solid rgba(232, 52, 78, 0.4)' borderRadius='0.8vw' padding='0 0 0 1vw'></Input>
          <Button width='60px' height='3.5vh' color='white' border='none' borderTRRadius='2vh' borderBRRadius='2vh' borderTLRadius='0.5vh' borderBLRadius='0.5vh' fontWeight='bold' backgroundColor='#E8344E' text='확인' margin='0 0 0 -3.0vw'></Button>
        </Grid>
    </React.Fragment>
  )
};

const Div = styled.span`
  border: 1px solid #E8344E;
  border-radius: 30px;
  background-color: #E8344E;
  padding: 1.3vh 1.7vw 1.3vh 1.7vw;
`;

export default Post;