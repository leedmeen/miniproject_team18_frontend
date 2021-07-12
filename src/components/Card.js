import React from "react";
import Grid from "../element/Grid";
import Text from "../element/Text";
import {history} from "../redux/configureStore";
import {useSelector, useDispatch} from "react-redux";
// import {useSelector} from "react-redux";
// import {actionCreators as adsActions} from "../redux/modules/ads"

const Card = (props) => {
    const dispatch = useDispatch();
    console.log(props)
    return (
        <React.Fragment>
                <Grid _onClick={() => {history.push("/detail/:id")}}
                br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">{props.title}</Grid>
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">{props.category}</Grid>
                    <Text margin="0 0 50px 0" dp="block">aaa</Text>
                    <Text margin="0 0 50px 0" dp="block">{props.createdAt}</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/{props.max_people}명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
                </Grid>
        </React.Fragment>
    )
}


export default Card;