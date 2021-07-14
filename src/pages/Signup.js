 import React from "react";
import "../share/postStyle.css";
import { CSSTransitionGroup } from 'react-transition-group';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../element/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "../element/Button";

import {history} from "../redux/configureStore";

const Signup = (props) => {
    const [id, setId] = React.useState("");
    const [nickname, setNickname] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [pwdcheck, setPwdCheck] = React.useState("");

    const sign = () => {
        if(id==="" || pwd==="" || pwdcheck===""){
            window.alert("아이디 혹은 비밀번호를 입력하세요");
            return;
        }
        if(pwd !== pwdcheck){
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
            return;
        }
    }
    const id_double_check = () => {
        if(id===""){
            window.alert("아이디를 입력해주세요!")
            return;
        }
    }
    const nickname_double_check = () => {
        if(nickname===""){
            window.alert("닉네임을 입력해주세요!")
            return;
        }
    }


    return (
        <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <Header/>
            <Grid display="flex" fd="column" mh="100vh" is_center>
                <Grid br="5px" width="70vw" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" padding="8vh 10vw 10vh 10vw">
                <Grid dp="flex" margin="0 0 10px 0" padding='0 7vw 0 7vw'>
                    <Grid width="50vw">
                    <TextField fullWidth="True" id="standard-basic" label="아이디" color="secondary"
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                    </Grid>
                    <Grid width="20vw">
                        <Button backgroundColor='#E8344E' border='none' color='white' borderRadius='0.5vh'
                        width="80%" height="30px"
                        margin="20px 0 0 20px" text="중복확인"></Button>
                    </Grid>
                </Grid>
                <Grid dp="flex" margin="0 0 10px 0" padding='0 7vw 0 7vw'>
                    <Grid width="50vw">
                    <TextField fullWidth="True" id="standard-basic" label="닉네임" color="secondary"
                        onChange={(e) => {
                            setNickname(e.target.value);
                        }}
                    />
                    </Grid>
                    <Grid width="20vw">
                        <Button backgroundColor='#E8344E' border='none' color='white' borderRadius='0.5vh'
                        width="80%" height="30px"
                        margin="20px 0 0 20px" text="중복확인"></Button>
                    </Grid>
                </Grid>
                <Grid dp="flex" margin="0 0 10px 0" padding='0 7vw 0 7vw'>
                    <Grid width="70vw">
                    <TextField fullWidth="True" id="standard-basic" label="비밀번호" color="secondary"
                        type="password"
                        onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                    />
                    </Grid>
                    {/* <Grid width="20vw">
                    </Grid> */}
                </Grid>
                <Grid dp="flex" padding='0 7vw 0 7vw'>
                    <Grid width="70vw">
                    <TextField fullWidth="True" id="standard-basic" label="비밀번호 확인" color="secondary" 
                        type="password"
                        onChange={(e) => {
                            setPwdCheck(e.target.value);
                        }}
                    />
                    </Grid>
                    {/* <Grid width="20vw">
                    </Grid> */}
                </Grid>
                <Grid margin="7vh 0 0 0" padding="0 40px 0 40px">
                    <Button _onClick={() => {
                        sign();
                        // history.push("/");
                    }}
                text='회원가입' backgroundColor='#E8344E' border='none' color='white' width='80%' height='4vh' padding='0.5vh 1vw 0.5vh 1vw' borderRadius='0.5vh' />
                </Grid>
                </Grid>

            </Grid>
            <Footer/>
        </CSSTransitionGroup>
    )
}

export default Signup;