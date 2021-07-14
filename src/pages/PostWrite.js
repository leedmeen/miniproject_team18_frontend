import React from "react";
import PostUpdate from "../components/PostUpdate";
import Grid from "../element/Grid"
import Footer from "../components/Footer"
import Header from "../components/Header";
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group'

const PostWrite = (props) => {

    return(
        <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
                <Header></Header>
                <Grid display="flex" fd="column" mh="100vh">
                    <PostUpdate id={props.match.params.id}></PostUpdate>
                </Grid>
            <Footer/>
        </CSSTransitionGroup>
    )
}

export default PostWrite;