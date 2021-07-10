import React, {useState, useRef} from "react";
import Grid from "../element/Grid";
import Text from "../element/Text";
import Input from "../element/Input"
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';

const PostUpdate = (props) => {
    
const useStyles = makeStyles((theme) => ({
margin: {
    margin: theme.spacing(3),
},
}));
const classes = useStyles();

const categoryInput = useRef(null);
const contentInput = useRef(null);
const peopleInput = useRef(null);
const addData = () => {
const inputs = {
    id: "abc",
    category: categoryInput.current.value,
    content: contentInput.current.value,
    people: peopleInput.current.value,
}
console.log(inputs)
}



    return (
        <React.Fragment>
            <Grid is_center bg="#ffffff" margin="20px 0 20px 0" dp="flex"><Text size="2.0em">제목</Text></Grid>
                <Grid box_shadow="0 4px 25px 0 rgb(0 0 0 /15%)" br="40px" margin="0 auto" width="80%" dp="flex" fd="column" is_center>
                <Grid width="60wv" padding="5px 30px 20px 30px">
                <Text size="1.3em" color="#3E373A">게시글 내용</Text>
                <TextField
                    id="outlined-multiline-static"
                    label="게시글 내용을 입력하세요"
                    color="secondary"
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth="True"
                    variant="outlined"
                    />
                 </Grid>
                <Grid width="60wv" padding="5px 30px 20px 30px">
                <Text size="1.3em" color="#3E373A"> 주제 </Text>
                <TextField
                    id="standard-textarea"
                    label="주제 입력"
                    color="secondary"
                    inputRef={categoryInput}
                    variant="outlined"
                    fullWidth="True"
                    multiline
                    />
                </Grid>
                <Grid width="60wv" padding="5px 30px 20px 30px"> 
                <Text size="1.3em" color="#3E373A">모집내용</Text>
                <TextField
                    id="outlined-multiline-static"
                    label="모집내용을 입력하세요"
                    multiline
                    rows={4}
                    inputRef={contentInput}
                    color="secondary"
                    fullWidth="True"
                    variant="outlined"
                    />
                </Grid>
                <Text size="1.3em" color="#3E373A">모집인원</Text>
                <Grid width="60wv" padding="5px 0 20px 0">
                <Input borderRadius="5px" border="2px solid #3E373A"
                width="5%" height="20px" ref={peopleInput}></Input><Text size="1.3em" color="#3E373A">명</Text>
                </Grid>
                <Grid is_center>
                    <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}
                        onClick={()=> {
                            addData();
                        }}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Upload
                    </Fab>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default PostUpdate;