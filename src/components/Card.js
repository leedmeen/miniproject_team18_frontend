import React from "react";
import Grid from "../element/Grid";
import Text from "../element/Text";
import {history} from "../redux/configureStore";
import {useSelector, useDispatch} from "react-redux";
import { getCookie } from "../share/Cookie";

const Card = (props) => {

    const [is_login, setIsLogin] = React.useState(false);
    
    React.useEffect(() => {
        let cookie = getCookie('session');
        if (cookie) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
    }, []);

        return(
        <React.Fragment>
            <Grid 
            props={props}
            br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px" padding="15px 0 0 0">
                <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">{props.title}</Grid>
                <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">{props.category}</Grid>
                <Text margin="0 0 50px 0" dp="block" size="1.2em">{props.host}</Text>
                <Text margin="0 0 50px 0" dp="block">{props.createdAt}</Text>
                <Text margin="0 0 30px 0" dp="block">인원 0/{props.maxPeople}명</Text>
                <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
            </Grid>
        </React.Fragment>
        );

}

Card.defaultProps={
    User: {
        id: 1,
        accountId: "asd",
        nickname: "asdasd",
    },
    // id: 2,
    title: "프론트 모집",
    category: "React",
    createdAt: "2021-07- 11T20:55:10.526Z",
    content: "공부할사람 모집합니다!",
    Application_user: ["asda", "asdasd"],  //신청 유저목록(userid 또는 고유id)
    maxPeople: 8,  //모집인원 수
}

export default Card;