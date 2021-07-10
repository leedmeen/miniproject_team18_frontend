import React from "react";
import styled from "styled-components";
import Grid from "../element/Grid";
import Text from "../element/Text"
import Image from "../element/Image"

const Footer = (props) => {
    return(
        <React.Fragment>
            <Grid height="30vh" margin="0 0 -50px 0" bg="#191a1b">
                <Grid is_center dp="flex" padding="40px 0 0 0">
                    <Grid width="30%" dp="inline-block">
                        <Text size="16px" color="#EFEFEF" bold>GAEMOIM</Text>
                        <Text size="16px" color="#191a1b" dp="block" margin='0 0 20px 0' bold>개</Text>
                        <Text size="16px" color="#191a1b" dp="block" margin='0 0 20px 0' bold>모</Text>
                        <Text size="16px" color="#191a1b" dp="block" margin='0 0 20px 0' bold>임</Text>
                    </Grid>
                    <Grid width="30%" dp="inline-block">
                        <Text size="16px" color="#EFEFEF" dp="block" bold margin='0 0 20px 0'>Back-End</Text>
                        <Text size="16px" color="#868894" dp="block" margin='0 0 20px 0' bold>정창길</Text>
                        <Text size="16px" color="#868894" dp="block" margin='0 0 20px 0' bold>방민수</Text>
                        <Text size="16px" color="#868894" dp="block" margin='0 0 20px 0' bold>송하영</Text>
                    </Grid>
                    <Grid width="30%" dp="inline-block">
                        <Text size="16px" color="#EFEFEF" dp="block" margin='0 0 20px 0' bold>Front-End</Text>
                        <Text size="16px" color="#868894" dp="block" margin='0 0 20px 0' bold>이동민</Text>
                        <Text size="16px" color="#868894" dp="block" margin='0 0 20px 0' bold>원동환</Text>
                        <Text size="16px" color="#191a1b" dp="block" margin='0 0 20px 0' bold>front-end</Text>
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