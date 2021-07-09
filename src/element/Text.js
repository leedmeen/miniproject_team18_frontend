import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { bold, color, size, children, margin, dp } = props;

    const styles = {bold: bold, color: color, size: size, margin: margin, dp: dp,};
    return(
        <React.Fragment>
            <GaeText {...styles}>{children}</GaeText>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children: null,
    bold: false,
    color: "#222831",
    size: "14px",
    margin: false,
    dp: false,
  };
  
  const GaeText = styled.span`
    display: ${(props) => props.dp};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "800" : "400")};
    ${(props) => (props.margin? `margin: ${props.margin};` : '')}
  `;

export default Text;