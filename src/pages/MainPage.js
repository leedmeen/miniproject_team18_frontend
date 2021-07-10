import React from "react";
import Footer from "../components/Footer"
import Grid from "../element/Grid";
import Header from '../components/Header';
import Card from "../components/Card"


const MainPage = (props) => {

    return (
        <React.Fragment>
                <Header></Header>
            <Grid display="flex" fd="column" mh="100vh">
                <Card></Card>
            </Grid>
            <Footer/>
        </React.Fragment>
    )
}

export default MainPage;