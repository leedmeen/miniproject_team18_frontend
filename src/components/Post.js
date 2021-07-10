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
        <Diva><Text color='white' size='1.8vh' bold>모집중</Text></Diva>
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2vh'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <Divb><Text color='#E8344E' size='1.3vh' bold>신청하기</Text></Divb>
              <Text size='xx-small' margin='5px 0 0 1.5vw' color='#E8344E' ><strong>4</strong>자리 남음!</Text>
            </div>
            <div style={{paddingTop: '2vh'}}>
              <span style={{float: 'right', fontSize: '1.7vh', fontWeight: 'bold'}}>작성자: 익명</span><br />
                <span style={{fontSize: '1.7vh', fontWeight: 'bold'}}>작성시각: 2021-07-10 01:33</span>
            </div>
          </div>
          <Paper variant="outlined" style={{margin: '1vh 0 1vh 0', borderRadius: '1vw', padding: '1vh'}}><Text size='2vh'>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br></br>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</Text></Paper>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <Text size='1.8vh' color='#E8344E' bold>댓글 1개</Text>
            </div>
            <div>
              <Button width='60px' height='3vh' backgroundColor='#E8344E' color='white' border='none' borderTLRadius='1vh' borderBLRadius='1vh' fontWeight='bold' text='수정'></Button>
              <Button width='60px' height='3vh' color='white' border='none' borderTRRadius='1vh' borderBRRadius='1vh' fontWeight='bold' backgroundColor='#E8344E' margin='0 0 0 0.2vw' text='삭제'></Button>
            </div>
          </div>
        <Grid is_center margin_top='1vh'>
          <Input type='text' placeholder='댓글을 입력해 주세요' width='60vw' height='3vh' fontSize='1.5vh' border='1px solid rgba(232, 52, 78, 0.4)' borderRadius='0.8vw' padding='0 0 0 1vw'></Input>
          <Button width='60px' height='3.5vh' color='white' border='none' borderTRRadius='2vh' borderBRRadius='2vh' borderTLRadius='0.5vh' borderBLRadius='0.5vh' fontWeight='bold' backgroundColor='#E8344E' text='확인' margin='0 0 0 -3.0vw'></Button>
        </Grid>
    </React.Fragment>
  )
};

const Diva = styled.span`
  border-radius: 30px;
  background-color: #E8344E;
  padding: 1.3vh 1.7vw 1.3vh 1.7vw;
`;

const Divb = styled.span`
  border-radius: 30px;
  background-color: #fff;
  padding: 1.3vh 1.7vw 1.3vh 1.7vw;
  border: 1px solid #e8344e;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  box-shadow: 0 3px 5px #ccc;
`;

export default Post;