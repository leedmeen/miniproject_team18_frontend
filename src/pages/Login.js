import React from "react";
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../element/Grid";
import Input from "../element/Input";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Login = (props) => {
    return(<CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>   
            <Header/>
        <Grid display="flex" fd="column" mh="100vh" is_center>
            <Grid br="5px" width="70vw" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" padding="20px">
            <Grid dp="flex" margin="0 0 20px 0">
                <Grid width="30vw" padding="25px 10px 0 0" is_right>아이디 :</Grid>
                <Grid width="70vw" padding="0 30px 0 0">
                <TextField fullWidth="True" id="standard-basic" color="secondary" label="Id" />
                </Grid>
            </Grid>
            <Grid dp="flex">
                <Grid width="30vw" padding="25px 10px 0 0" is_right>비밀번호 : </Grid>
                <Grid width="70vw" padding="0 30px 0 0">
                <TextField fullWidth="True" id="standard-basic" color="secondary" label="Password" />
                </Grid>
            </Grid>
            <Grid margin="30px 0 0 0" padding="0 40px 0 40px">
            <Button fullWidth="True" variant="contained" color="secondary">
                로그인
            </Button>
            </Grid>
            <Grid margin="20px 0 0 0" padding="0 40px 0 40px">
            <Button fullWidth="True" variant="contained" color="secondary">
                회원가입
            </Button>
            </Grid>
            </Grid>
        </Grid>
        <Footer/>

    </CSSTransitionGroup>)
}

export default Login;