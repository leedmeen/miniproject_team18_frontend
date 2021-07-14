import React, {useEffect} from 'react';
import Grid from '../element/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import styled from 'styled-components';
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';
import { actionCreators as adsActions } from '../redux/modules/ads';

const DetailPage = (props) => {
  const dispatch = useDispatch();
  const id = window.location.pathname.split('/detail/')[1];
  const ad_list = useSelector((state) => state.ads.list);
  const ad = ad_list.find((ad) => ad.id == id);
  const comment_list = useSelector((state) => state.comment.list);
  const comment_found = comment_list.filter(comment => comment.adId == id);
  useEffect(() => {
    dispatch(commentActions.setCommentDB(id));
    if (ad) {
      return;
    }
    dispatch(adsActions.setOneAdDB(id));
  }, []);

  return (
    <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
      <Grid mh="100vh">
        <Header/>
        <Card>
          <Post {...ad} comment_num={comment_found.length} id={id}/>
          { comment_found.map((c) => {
            return <CommentList {...c} />
          })}
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