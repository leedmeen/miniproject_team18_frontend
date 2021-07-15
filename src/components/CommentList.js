import React, { useState } from 'react';
import Text from '../element/Text';
import Button from '../element/Button';
import Input from '../element/Input';
import styled from 'styled-components';
import spartalt from '../sparta-lt.png';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';
import _ from 'lodash';
import { history } from '../redux/configureStore';

const CommentList = (props) => {
  const dispatch = useDispatch();
  const {adId, content, createdAt, id, userId, nickname, reload} = props;
  const [edit, setEdit] = useState(false);
  const [edit_content, setEditContent] = useState(content);
  const input = _.debounce((i) => setEditContent(i), 500);
  const my_userid = useSelector(state => state.user.id);
  
  const editContent = (e) => {
    input(e.target.value);
  };

  const editComment = () => {
    const comment = {
      content: edit_content,
      userId: userId,
      adId: adId,
      id: id
    }
    dispatch(commentActions.editCommentDB(comment));
  };

  const deleteComment = (adId, id) => {
    dispatch(commentActions.deleteCommentDB(adId, id));
  }

  return (
    <React.Fragment>
      <Box>
      <Div><Text color='#E8344E' bold>{nickname ? nickname : '르탄이'} <img src={spartalt} style={{width: '2vw'}}/></Text></Div>
      <>
      <Text bold margin='0 1vw 0 0'>{content}</Text>
      <Text margin='0 1vw 0 0'>{createdAt}</Text>
      </>
      { my_userid == userId && edit ? 
        <>
          <Input type='text' _onChange={editContent} value={edit_content} width='45vw' height='3vh' fontSize='1.5vh' border='1px solid rgba(232, 52, 78, 0.4)' borderRadius='0.8vw' padding='0 0 0 1vw'></Input>
          <Button _onClick={() => {editComment(); setEditContent('');}} width='60px' height='3.5vh' color='white' border='none' borderTRRadius='2vh' borderBRRadius='2vh' borderTLRadius='0.5vh' borderBLRadius='0.5vh' backgroundColor='#E8344E' text='수정' margin='0 0 0 -3.0vw' />
        </>
      : '' }
        { my_userid == userId && !edit ?
        <>
        <Button _onClick={() => setEdit(true)} width='60px' height='3vh' backgroundColor='#E8344E' color='white' border='none' borderTLRadius='1vh' borderBLRadius='1vh' text='수정' />
        <Button _onClick={() => {deleteComment(adId, id)}} width='60px' height='3vh' color='white' border='none' borderTRRadius='1vh' borderBRRadius='1vh' backgroundColor='#E8344E' margin='0 0 0 0.2vw' text='삭제' />
        </>
        :
        ''
        }
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