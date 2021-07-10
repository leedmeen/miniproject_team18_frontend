import React from 'react';
import Text from '../element/Text';
import Button from '../element/Button';
import styled from 'styled-components';

const CommentList = (props) => {

  return (
    <React.Fragment>
      <Box>
          <Div><Text>댓글 작성자</Text></Div>
          <Text margin='0 1vw 0 0'>댓글 내용</Text>
          <Button width='70px' height='4vh' text='수정'></Button>
          <Button width='70px' height='4vh' margin='0 10vw 0 0' text='삭제'></Button>
      </Box>
    </React.Fragment>
  )
};

const Div = styled.span`
  border: 1px solid black;
  padding: 1vh 1vw 1vh 1vw;
  margin-right: 1vw;
  
`;

const Box = styled.div`
  display: block;
  align-items: center;
  text-align: left;
  margin: 3vh 0 3vh 13vw;
`;

export default CommentList;