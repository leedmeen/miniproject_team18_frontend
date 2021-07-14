import React, { useEffect } from "react";
import Footer from "../components/Footer"
import Grid from "../element/Grid";
import Header from '../components/Header';
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {actionCreators as adsActions} from "../redux/modules/ads"
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group'

const MainPage = (props) => {
    const dispatch = useDispatch();
    const ads_list = useSelector(state => state.ads.list);
    const {history} = props;
    useEffect(() => {
        dispatch(adsActions.setAdsDB());
    }, []);


    return (
        <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
                <Header></Header>
            <Grid display="flex" fd="column" mh="100vh">
            <Grid is_center>
                <Grid margin="0 auto" color="white" br="40px"padding="10px" width="200px" height="40px" bg="rgb(232, 52, 78)" _onClick={() => {history.push("/ads")}} hover={'cursor: pointer;'}>
                게시글 추가하기</Grid>
                {ads_list && ads_list.map((p, idx)=> {
                    return( <Card {...p}></Card> )
                })}
                </Grid>
            </Grid>
            <Footer/>
        </CSSTransitionGroup>
    )
}

export default MainPage;