import React from "react";
import Grid from "../element/Grid";
import Input from "../element/Input";
import Text from "../element/Text";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const PostUpdate = (props) => {
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
    margin: theme.spacing(1),
},
extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const classes = useStyles();

    return (
        <React.Fragment>
            <Grid is_center margin="10px 0 10px 0"><Text size="2.0em">제목</Text></Grid>
                <Grid width="80wv" bg="#E6E6E6" is_center>
                <Text size="1.3em" dp="inline-block">게시글 내용</Text>
                <Grid width="60wv" padding="5px 30px 20px 30px">
                <TextField
                    id="outlined-multiline-static"
                    label="게시글 내용을 입력하세요"
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth="true"
                    variant="filled"
                    />
                 </Grid>
                 <Text size="1.3em"> 주제 </Text>
                <Grid padding="5px 30px 20px 30px">
                <TextField
                    id="standard-textarea"
                    label="주제 입력"
                    variant="filled"
                    fullWidth="true"
                    multiline
                    />
                </Grid>
                <Text size="1.3em">모집내용</Text>
                <Grid padding="5px 30px 20px 30px"> 
                <TextField
                    id="outlined-multiline-static"
                    label="모집내용을 입력하세요"
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth="true"
                    variant="filled"
                    />
                </Grid>
                <Text size="1.3em">모집인원</Text>
                <Grid padding="5px 0 20px 0">
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
            </Grid>
            <Grid is_right>
            <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
            <NavigationIcon className={classes.extendedIcon} />
            Upload
            </Fab>
            </Grid>
        </React.Fragment>
    )
}

export default PostUpdate;