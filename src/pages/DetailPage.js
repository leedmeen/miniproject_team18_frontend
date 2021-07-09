import React from 'react';
import Grid from '../element/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import CommentList from '../components/CommentList';

const DetailPage = (props) => {

  return (
    <React.Fragment>
      <Grid display="flex" fd="column" mh="100vh" padding='1%'>
       <Header/>
       <Post></Post>
        <CommentList></CommentList>
        </Grid>
      <Footer/>
</React.Fragment>
  )
};

export default DetailPage;