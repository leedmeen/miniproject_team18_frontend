import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const {size, src} = props;

    const styles = {
        src: src,
        size: size,
    }
    return(
        <React.Fragment>
            <FooterImage {...styles}></FooterImage>
        </React.Fragment>
    )
}

Image.defaultProps = {
    src: "",
    size: false,
}

const FooterImage = styled.div`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

export default Image;