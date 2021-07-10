import React from "react";
import Grid from "../element/Grid";
import Text from "../element/Text";
import {history} from "../redux/configureStore";

const Card = (props) => {
    return (
        <React.Fragment>
            <Grid is_center >
                <Grid margin="0 auto" color="white" br="40px"padding="10px" width="200px" height="40px" bg="rgb(232, 52, 78)" _onClick={() => {history.push("/ads")}} hover={'cursor: pointer;'}>
                 게시글 추가하기</Grid>
                <Grid _onClick={() => {history.push("/detail")}}
                br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">리액트 스터디 모집</Grid>
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">React</Grid>
                    <Text margin="0 0 50px 0" dp="block">작성자</Text>
                    <Text margin="0 0 50px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
                </Grid>
                <Grid br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">노드 스터디 모집</Grid>
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">Node.js</Grid>
                    <Text margin="0 0 50px 0" dp="block">작성자</Text>
                    <Text margin="0 0 50px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="#E6E6E6">마감</Grid>
                </Grid>
                <Grid br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">제목</Grid>
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">주제</Grid>
                    <Text margin="0 0 50px 0" dp="block">작성자</Text>
                    <Text margin="0 0 50px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
                </Grid>
                <Grid br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">제목</Grid>
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">주제</Grid>
                    <Text margin="0 0 50px 0" dp="block">작성자</Text>
                    <Text margin="0 0 50px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
                </Grid>
                <Grid br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">제목</Grid>
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">주제</Grid>
                    <Text margin="0 0 50px 0" dp="block">작성자</Text>
                    <Text margin="0 0 50px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
                </Grid>
                <Grid br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="rgb(232, 52, 78)">제목</Grid>
                    <Grid margin="20px auto" padding="10px"br="16px" width="200px" height="40px" color="white" bg="#12CDD4">주제</Grid>
                    <Text margin="0 0 50px 0" dp="block">작성자</Text>
                    <Text margin="0 0 50px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Card;