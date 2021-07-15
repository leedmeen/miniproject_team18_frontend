import React, { useEffect } from "react";
import Footer from "../components/Footer"
import Grid from "../element/Grid";
import Header from '../components/Header';
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {actionCreators as adsActions} from "../redux/modules/ads"
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group'
import {getCookie, deleteCookie} from "../share/Cookie";

const MainPage = (props) => {
    const dispatch = useDispatch();
    const ads_list = useSelector(state => state.ads.list);
    const {history} = props;
    const [is_login, setIsLogin] = React.useState(false);
    
    useEffect(() => {
        
        let cookie = getCookie('session');
        if (cookie) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
        dispatch(adsActions.setAdsDB());
        history.replace("/")
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
                {is_login === true ? 
                <Grid margin="0 auto" color="white" br="40px"padding="10px" width="200px" height="40px" bg="rgb(232, 52, 78)" 
                _onClick={() => {history.push("/ads")}} hover={'cursor: pointer;'}>
                게시글 추가하기</Grid>
                : <Grid margin="0 auto" color="white" br="40px"padding="10px" width="200px" height="40px" bg="rgb(232, 52, 78)" 
                _onClick={() => {window.alert("로그인이 필요한 서비스입니다.")}} hover={'cursor: pointer;'}>
                게시글 추가하기</Grid> }
                {is_login === true? ads_list && ads_list.map((p, idx)=> {
                    return( <Grid _onClick={() => {history.push(`/detail${p.id}`)}} dp="inline"><Card {...p}></Card></Grid> )
                }) :
                ads_list && ads_list.map((p, idx)=> {
                    return( <Grid _onClick={()=> {window.alert("로그인이 필요한 서비스입니다!") }}dp="inline"><Card {...p}></Card></Grid> )
                })

                }
                </Grid>
            </Grid>
            <Footer/>
        </CSSTransitionGroup>
    )
}

export default MainPage;