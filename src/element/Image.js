import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const {size, src, _onClick} = props;

    const styles = {
        src: src,
        size: size,
    }
    return(
        <React.Fragment>
            <FooterImage {...styles} onClick={_onClick}></FooterImage>
        </React.Fragment>
    )
}

Image.defaultProps = {
    src: "",
    size: false,
    _onClick: () => {},
}

const FooterImage = styled.div`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

export default Image;