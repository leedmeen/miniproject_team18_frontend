import React from "react";
import PostUpdate from "../components/PostUpdate";
import Grid from "../element/Grid"
import Footer from "../components/Footer"
import Header from "../components/Header";

const PostWrite = () => {
    return(
        <React.Fragment>
                <Header></Header>
                <Grid display="flex" fd="column" mh="100vh">
                
                <PostUpdate></PostUpdate>
            </Grid>
            <Footer/>
        </React.Fragment>
    )
}

export default PostWrite;