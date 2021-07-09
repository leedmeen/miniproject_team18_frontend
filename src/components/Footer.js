import React from "react";
import styled from "styled-components";
import Grid from "../element/Grid";
import Text from "../element/Text"
import Image from "../element/Image"

const Footer = (props) => {
    return(
        <React.Fragment>
            <Grid height="30vh" margin="0 0 -50px 0" bg="rgb(73, 80, 87)">
                <Grid is_center dp="flex" padding="40px 0 0 0">
                    <Grid width="30%" dp="inline-block">
                        <Text size="40px" color="white">개모임</Text>
                    </Grid>
                    <Grid width="30%" dp="inline-block">
                        <Text size="25px" color="white" dp="block">Back-End</Text>
                        <Text size="25px" color="white" dp="block">정창길</Text>
                        <Text size="25px" color="white" dp="block">방민수</Text>
                        <Text size="25px" color="white" dp="block">송하영</Text>
                    </Grid>
                    <Grid width="30%" dp="inline-block">
                        <Text size="25px" color="white" dp="block">Front-End</Text>
                        <Text size="25px" color="white" dp="block">이동민</Text>
                        <Text size="25px" color="white" dp="block">원동환</Text>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
const Ul = styled.ul`
    list-style: none;
    color: white;

`;

export default Footer;