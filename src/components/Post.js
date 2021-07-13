import React from 'react';
import Grid from '../element/Grid';
import Text from '../element/Text';
import Button from '../element/Button';
import Input from '../element/Input';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { actionCreators as commentActions } from '../redux/modules/comment';
import { actionCreators as adsActions } from '../redux/modules/ads';
import { useDispatch, useSelector } from 'react-redux';
import {history} from "../redux/configureStore"

const Post = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const comment_ref = React.useRef();
  const addComment = () => {
    const comment = {
      content: comment_ref.current.value,
      userId: 1,
      id: id
    }
    dispatch(commentActions.addCommentDB(comment));
  };
  return (
    <React.Fragment>
      <Grid is_center padding='5vh 3vw 3vh 3vw'>
          <Text bold size='4vh'>{props.props.title}</Text>
            {/* {props.props.title} */}
        </Grid>
        <div style={{display: 'flex', flexDirection: 'left'}}>
          <Diva><Text color='white' size='1.8vh' bold>모집중</Text></Diva>
          <Divb><Text color='#E8344E' size='1.3vh' bold>신청하기</Text></Divb>
        </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2vh'}}>
              <Divc><Text bold size='large' margin='5px 0.5vw 5px 0.5vw' color='#aaa' >{(props.props.maxPeople)}자리 남음!</Text></Divc>
            <div style={{paddingTop: '2vh'}}>
              <span style={{float: 'right', fontSize: '1.7vh', fontWeight: 'bold'}}>작성자: 르탄이 친구</span><br />
                <span style={{fontSize: '1.7vh', fontWeight: 'bold'}}>작성시각: {props.props.createdAt}</span>
            </div>
          </div>
          <Paper variant="outlined" style={{margin: '1vh 0 1vh 0', borderRadius: '1vw', padding: '2vh'}}><Text size='2vh'>{props.props.content}</Text></Paper>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <Text size='1.8vh' color='#E8344E' bold>댓글 2개</Text>
            </div>
            <div>
              <Button width='60px' height='3vh' backgroundColor='#E8344E' color='white' border='none' borderTLRadius='1vh' borderBLRadius='1vh' fontWeight='bold' text='수정'
                _onClick={()=> {
                  history.push(`/ads/${props.id}`)
                }}></Button>
              <Button _onClick={()=> {
                dispatch(adsActions.deleteAdsDB(id));
                history.push("/");
              }} 
              width='60px' height='3vh' color='white' border='none' borderTRRadius='1vh' borderBRRadius='1vh' fontWeight='bold' backgroundColor='#E8344E' margin='0 0 0 0.2vw' text='삭제'></Button>
            </div>
          </div>
        <Grid is_center margin_top='1vh'>
          <Input type='text' _ref={comment_ref} placeholder='댓글을 입력해 주세요' width='60vw' height='3vh' fontSize='1.5vh' border='1px solid rgba(232, 52, 78, 0.4)' borderRadius='0.8vw' padding='0 0 0 1vw'></Input>
          <Button type='submit' _onClick={()=> {
            addComment();
            history.replace(`/detail/${id}`);
            }} width='60px' height='3.5vh' color='white' border='none' borderTRRadius='2vh' borderBRRadius='2vh' borderTLRadius='0.5vh' borderBLRadius='0.5vh' fontWeight='bold' backgroundColor='#E8344E' text='확인' margin='0 0 0 -3.0vw'></Button>
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
  margin-left: 5px;
`;

const Divc = styled.span`
  border-radius: 30px;
  background-color: #e5e0e0;
  padding: 1.3vh 1.7vw 1.3vh 1.7vw;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  margin-left: 5px;
  line-height: 3vh;
`;

export default Post;