import React from "react";
import Grid from "../element/Grid";
import Input from "../element/Input";
import Text from "../element/Text";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import NavigationIcon from '@material-ui/icons/Navigation';

const PostUpdate = (props) => {
    console.log(props);
    const currencies = [
        {label: '1'},
        {label: '2'},
        {label: '3'},
        {label: '4'},
        {label: '5'},
        {label: '6'},
        {label: '7'},
      ];
const useStyles = makeStyles((theme) => ({
margin: {
    margin: theme.spacing(3),
},
extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const classes = useStyles();

    return (
        <React.Fragment>
            <Grid is_center bg="#ffffff" margin="20px 0 20px 0" dp="flex"><Text size="2.0em">제목</Text></Grid>
                <Grid box_shadow="0 4px 25px 0 rgb(0 0 0 /15%)" br="40px" margin="0 auto" width="80%" dp="flex" fd="column" is_center>
                <Grid width="60wv" padding="5px 30px 20px 30px">
                <Text size="1.3em" color="#3E373A">게시글 내용</Text>
                <TextField
                    id="outlined-multiline-static"
                    label="게시글 내용을 입력하세요"
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth="true"
                    variant="outlined"
                    />
                 </Grid>
                <Grid width="60wv" padding="5px 30px 20px 30px">
                <Text size="1.3em" color="#3E373A"> 주제 </Text>
                <TextField
                    id="standard-textarea"
                    label="주제 입력"
                    variant="outlined"
                    fullWidth="true"
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
                    defaultValue=""
                    fullWidth="true"
                    variant="outlined"
                    />
                </Grid>
                <Text size="1.3em" color="#3E373A">모집인원</Text>
                <Grid width="60wv" padding="5px 0 20px 0">
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currencies}
                    helperText="모집인원을 선택하세요"
                    >{currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                </Grid>
                <Grid is_center>
                    <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}
                        onClick={()=> {
                            props.history.push("/");
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