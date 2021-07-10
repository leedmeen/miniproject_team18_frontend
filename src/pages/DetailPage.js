import React from 'react';
import Grid from '../element/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import styled from 'styled-components';
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group'

const DetailPage = (props) => {

  return (
    <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
      <Grid mh="100vh" padding='1%'>
       <Header/>
       <Card>
       <Post></Post>
        <CommentList></CommentList>
        </Card>
        </Grid>
      <Footer/>
      </CSSTransitionGroup>
  )
};

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 2vw;
  width: 70vw;
  margin-left: 10vw;
  margin-right: 10vw;
  box-shadow: 0 4px 25px 0 rgb(0 0 0 /15%);
  padding: 0 5vw 2vh 5vw;
`;

export default DetailPage;