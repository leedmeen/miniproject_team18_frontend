import React from "react";
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../element/Grid";
import Input from "../element/Input";
import TextField from '@material-ui/core/TextField';
import Button from '../element/Button';

const Login = (props) => {
    return(<CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>   
            <Header/>
        <Grid display="flex" fd="column" mh="100vh" is_center>
            <Grid br="5px" width="70vw" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" padding="5vh 4vw 7vh 4vw">
            <Grid dp="flex" margin="0 0 20px 0">
                <Grid width="15vw" padding="25px 10px 0 0" is_center>아이디 :</Grid>
                <Grid width="85vw" padding="0 30px 0 0">
                <TextField fullWidth="True" id="standard-basic" color="secondary" label="Id" />
                </Grid>
            </Grid>
            <Grid dp="flex">
                <Grid width="15vw" padding="25px 10px 0 0" is_center>비밀번호 : </Grid>
                <Grid width="85vw" padding="0 30px 0 0">
                <TextField fullWidth="True" id="standard-basic" color="secondary" label="Password" />
                </Grid>
            </Grid>
            <Grid margin="5vh 0 0 0" padding="0 40px 0 40px">
            <Button text='로그인' backgroundColor='#e8344e' border='none' color='white' width='100%' height='4vh' padding='0.5vh 1vw 0.5vh 1vw' borderRadius='0.5vh' />
            </Grid>
            <Grid margin="2vh 0 0 0" padding="0 40px 0 40px">
            <Button text='회원가입' backgroundColor='#e8344e' border='none' color='white' width='100%' height='4vh' padding='0.5vh 1vw 0.5vh 1vw' borderRadius='0.5vh' />
            </Grid>
            </Grid>
        </Grid>
        <Footer/>

    </CSSTransitionGroup>)
}

export default Login;