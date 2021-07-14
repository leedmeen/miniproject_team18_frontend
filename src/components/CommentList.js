import React, { useState } from 'react';
import Text from '../element/Text';
import Button from '../element/Button';
import Input from '../element/Input';
import styled from 'styled-components';
import spartalt from '../sparta-lt.png';
import { useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';
import _ from 'lodash';
import { history } from '../redux/configureStore';

const CommentList = (props) => {
  const dispatch = useDispatch();
  const {adId, content, createdAt, id, userId, reload} = props;
  const [edit, setEdit] = useState(false);
  const [edit_content, setEditContent] = useState(content);
  const input = _.debounce((i) => setEditContent(i), 500);

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
      <Div><Text color='#E8344E' bold>르탄이 <img src={spartalt} style={{width: '2vw'}}/></Text></Div>
      { edit ? 
        <>
          <Input type='text' _onChange={editContent} value={edit_content} width='45vw' height='3vh' fontSize='1.5vh' border='1px solid rgba(232, 52, 78, 0.4)' borderRadius='0.8vw' padding='0 0 0 1vw'></Input>
          <Button _onClick={() => {editComment(); reload();}} width='60px' height='3.5vh' color='white' border='none' borderTRRadius='2vh' borderBRRadius='2vh' borderTLRadius='0.5vh' borderBLRadius='0.5vh' fontWeight='bold' backgroundColor='#E8344E' text='수정' margin='0 0 0 -3.0vw' />
        </>
      : 
        <>
          <Text bold margin='0 1vw 0 0'>{content}</Text>
          <Text margin='0 1vw 0 0'>{createdAt}</Text>
          <Button _onClick={() => setEdit(true)} width='60px' height='3vh' backgroundColor='#E8344E' color='white' border='none' borderTLRadius='1vh' borderBLRadius='1vh' fontWeight='bold' text='수정' />
          <Button _onClick={() => {deleteComment(adId, id); reload();}} width='60px' height='3vh' color='white' border='none' borderTRRadius='1vh' borderBRRadius='1vh' fontWeight='bold' backgroundColor='#E8344E' margin='0 0 0 0.2vw' text='삭제' />
        </> }
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