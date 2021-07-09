import React from "react";
import Footer from "../components/Footer"
import Grid from "../element/Grid";
import Header from '../components/Header';

const MainPage = () => {
    return (
        <React.Fragment>
            <Grid display="flex" fd="column" mh="100vh">
            
            <Header></Header>
            </Grid>
            <Footer/>
        </React.Fragment>
    )
}

export default MainPage;