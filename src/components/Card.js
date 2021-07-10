import React from "react";
import Grid from "../element/Grid";
import Text from "../element/Text";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Card = (props) => {
    const useStyles = makeStyles((theme) => ({
        fab: {
            position: 'absolute',
            bottom: theme.spacing(1),
            right: theme.spacing(2),
        },
      }));

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid is_center>
                <Grid _onClick={()=> {}}
                br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid bbs="solid" width="250px" bc="#E6E6E6" margin="20px auto" height="40px" color="black">
                        <Text size="1.4em" bold>제목</Text>
                    </Grid>
                    <Grid is_center dp="flex">
                    <Grid margin="10px" padding="5px" br="16px" width="60px" height="30px" color="white" bg="#12CDD4" dp="inline-block">
                        <Text color="white">Topic</Text>
                    </Grid>
                    </Grid>
                    <Text margin="0 0 50px 0" dp="block">작성자</Text>
                    <Text margin="0 0 50px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 30px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" color="white" height="40px" bg="rgb(232, 52, 78)">모집중</Grid>
                </Grid>
                <Grid _onClick={()=> {}}
                br="40px" width="300px" height="400px" dp="inline-block" box_shadow="0 4px 25px 0px rgb(0 0 0 / 15%)" margin="20px">
                    <Grid bbs="solid" width="250px" bc="#E6E6E6" margin="20px auto" height="40px" color="black">
                        <Text size="1.4em" bold>제목</Text>
                    </Grid>
                    <Grid is_center dp="flex">
                    <Grid margin="10px" padding="5px" br="16px" width="60px" height="30px" color="white" bg="#12CDD4" dp="inline-block">
                        <Text color="white">Topic</Text>
                    </Grid>
                    </Grid>
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
            </Grid>
            <Fab size="large" color="secondary" aria-label="add" className={classes.fab}>
            <AddIcon />
            </Fab>
        </React.Fragment>
    )
}

export default Card;