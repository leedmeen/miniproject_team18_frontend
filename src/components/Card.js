import React from "react";
import Grid from "../element/Grid";
import Text from "../element/Text";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const Card = (props) => {

    const useStyles = makeStyles((theme) => ({
        fab: {
            position: 'absolute',
            bottom: theme.spacing(-20),
            right: theme.spacing(2),
        },
      }));
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid is_center>
                <Grid br="40px" width="200px" height="300px" dp="inline-block" bc="#E6E6E6" bs="solid" margin="20px">
                    <Grid margin="10px auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">제목</Grid>
                    <Text margin="10px 0 30px 0" dp="block">주제</Text>
                    <Text margin="0 0 30px 0" dp="block">작성자</Text>
                    <Text margin="0 0 30px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 20px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">모집중</Grid>
                </Grid>
                <Grid br="40px" width="200px" height="300px" dp="inline-block" bc="#E6E6E6" bs="solid" margin="20px">
                    <Grid margin="10px auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">제목</Grid>
                    <Text margin="10px 0 30px 0" dp="block">주제</Text>
                    <Text margin="0 0 30px 0" dp="block">작성자</Text>
                    <Text margin="0 0 30px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 20px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">모집중</Grid>
                </Grid>
                <Grid br="40px" width="200px" height="300px" dp="inline-block" bc="#E6E6E6" bs="solid" margin="20px">
                    <Grid margin="10px auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">제목</Grid>
                    <Text margin="10px 0 30px 0" dp="block">주제</Text>
                    <Text margin="0 0 30px 0" dp="block">작성자</Text>
                    <Text margin="0 0 30px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 20px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">모집중</Grid>
                </Grid>
                <Grid br="40px" width="200px" height="300px" dp="inline-block" bc="#E6E6E6" bs="solid" margin="20px">
                    <Grid margin="10px auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">제목</Grid>
                    <Text margin="10px 0 30px 0" dp="block">주제</Text>
                    <Text margin="0 0 30px 0" dp="block">작성자</Text>
                    <Text margin="0 0 30px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 20px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">모집중</Grid>
                </Grid>
                <Grid br="40px" width="200px" height="300px" dp="inline-block" bc="#E6E6E6" bs="solid" margin="20px">
                    <Grid margin="10px auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">제목</Grid>
                    <Text margin="10px 0 30px 0" dp="block">주제</Text>
                    <Text margin="0 0 30px 0" dp="block">작성자</Text>
                    <Text margin="0 0 30px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 20px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">모집중</Grid>
                </Grid>
                <Grid br="40px" width="200px" height="300px" dp="inline-block" bc="#E6E6E6" bs="solid" margin="20px">
                    <Grid margin="10px auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">제목</Grid>
                    <Text margin="10px 0 30px 0" dp="block">주제</Text>
                    <Text margin="0 0 30px 0" dp="block">작성자</Text>
                    <Text margin="0 0 30px 0" dp="block">작성일자/시간</Text>
                    <Text margin="0 0 20px 0" dp="block">인원 0/0명</Text>
                    <Grid margin="0 auto" padding="10px"br="16px" width="70px" height="40px" bg="#E6E6E6">모집중</Grid>
                </Grid>
            </Grid>
            <Fab size="large" color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
            </Fab>
        </React.Fragment>
    )
}


export default Card;