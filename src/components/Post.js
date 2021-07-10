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
            <Text>모집중</Text>
            </Div>
            <Text bold size='2vh' margin='0 0 0 10px'>0/4</Text>
          <span style={{float: 'right', fontSize: '2vh', marginRight: '10vw'}}>작성자: 익명</span>
          <Grid is_right>
            <span style={{fontSize: '2vh', marginRight: '10vw'}}>작성시각: 2021-07-10 01:33</span>
          </Grid>
          <Grid is_right margin_top='1vh'>
            <Button width='70px' height='4vh' text='수정'></Button>
            <Button width='70px' height='4vh' margin='0 10vw 0 0' text='삭제'></Button>
          </Grid>
          <Paper variant="outlined" style={{margin: '3vh 10vw 3vh 10vw'}}><Text size='2vh'>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</Text></Paper>
        <Text size='2vh' margin='0 0 0 10vw'>댓글 3개</Text>
        <Grid is_center margin_top='3vh'>
          <Input type='text' placeholder='댓글을 입력해 주세요' width='70vw' height='3vh' fontSize='1.5vh'></Input>
          <Button width='70px' height='4vh' text='확인' margin='0 0 0 -3.5vw'></Button>
        </Grid>
    </React.Fragment>
  )
};

const Div = styled.span`
  border: 1px solid black;
  padding: 1vh 1vw 1vh 1vw;
  margin: 0 0 0 10vw;
`;

export default Post;