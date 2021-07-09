import React from "react";
import Footer from "../components/Footer"
import Grid from "../element/Grid";

const MainPage = () => {
    return (
        <React.Fragment>
            <Grid display="flex" fd="column" mh="100vh"></Grid>
            <Footer/>
        </React.Fragment>
    )
}

export default MainPage;